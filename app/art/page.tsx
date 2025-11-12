import styles from "./page.module.css";



// create an object type for the art data
type ArtObject = {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImageSmall: string;
  creditLine: string;
  objectDate: string;
  medium: string;
};


export async function getArtData(departmentId: string, count: number) {
  // Fetch object IDs for the specified department
  const objectResDep = await fetch(`${process.env.BASE_MET_API_URL}?departmentIds=${departmentId}`);

  // Check if the response is OK
  if (!objectResDep.ok) {
    throw new Error(`Failed to fetch object IDs for department ${departmentId}`);
  }
  const objectDataDep = await objectResDep.json();
  const objectIDs: number[] = objectDataDep.objectIDs || [];

  if (!objectDataDep.objectIDs || objectDataDep.objectIDs.length === 0) {
      console.log('No objects found for this department.');
      return [];
    }

  // Shuffle the array of IDs and slice the number we need
  const shuffledIDs = shuffleArray(objectDataDep.objectIDs);
  const randomIDs = shuffledIDs.slice(0, count);

  // Fetch details for each selected object ID
  const artPromises = randomIDs.map(async (id: number) => {
        const res = await fetch(`${process.env.BASE_MET_API_URL}/${id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data for object ID ${id}`);
        }
        return res.json();
  });

  const artObjects = await Promise.all(artPromises);


  return artObjects.filter((art): art is ArtObject => art != null);
    
}


// --- HELPER FUNCTION 1: SHUFFLE ARRAY ---
// This is the Fisher-Yates shuffle algorithm.
// It's the best way to get a true random shuffle of an array.
function shuffleArray(array: any[]) {
  // We create a copy so we don't change the original array
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    // Pick a random index before the current one
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the two elements
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


function ArtPiece({ art }: { art: ArtObject }) {
  return (
    <div className={styles.artPiece}>
      <h2>{art.title}</h2>
      <p>{art.artistDisplayName}</p>
      {art.primaryImageSmall ? (
        <img src={art.primaryImageSmall} alt={art.title} />
      ) : (
        <p>No image available</p>
      )}

      <h4>About this piece:</h4>
      <p>{art.creditLine}</p>
      {art.objectDate ? (<p>art.objectDate</p>) : (<p>No date available</p>)}
      <p>{art.medium}</p>
    </div>
  );
}


export default async function Display() {

  // I just put here a random number to test the function. Not sure what you expect to see here
  const artData = await getArtData('11', 9);

  return (
    <main>
      <h1>Art Gallery</h1>
      <div className={styles.artGrid}> 
        {artData.map((artObject) => (
          <ArtPiece 
            key={artObject.objectID}  /* React needs a unique key for lists */
            art={artObject} 
          />
        ))}
      </div>
    </main>
  );


  
  // --- ADD THIS LINE TO TEST ---
  console.log("Art Data Received:", artData);
}

