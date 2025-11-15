import styles from './page.module.css';

export default function DesignPage() {
  return (

    <>
    <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoDiamond}></div>
          <div className={styles.logoVerticalBar}></div>
          <div className={styles.logoHorizontalBar}></div>
          <div className={styles.logoSquare}>
          </div>
        </div>
        <h1 className={styles.appTitle}>תֵּיבַת אוֹצֵר</h1>
      </header>

    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>מהי אוצרות</h2>
          <div className={styles.sectionTitleUnderline}></div>
        </div>
        <p className={styles.bodyText}>
          במקור הוגדרה אוצְרוּת כאחריות על שמירה, סידור והצגה של אוספים במוזיאונים וגלריות. כיום אוצרות נתפסת כמגוון רחב של פרקטיקות לרבות יזמות, הפקה, עיצוב ותיווך של תערוכות או פעולות אמנות שונות.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>הבעיה</h2>
          <div className={styles.sectionTitleUnderline}></div>
        </div>
        <p className={styles.bodyText}>
          תהליך הקמת תערוכה כולל מספר רב של משאבים ואנשים. כרגע, הדבר כרוך באינספור מסמכים, טלפונים ומיילים. איסוף וארגון מידע, הקצאת חללים ותיאום שינוע של יצירות יכולים להוביל לתסכול, קשיים בתקשורת, ולעיתים אף כשלים לוגיסטיים עבור צוות המוזיאון ואנשים שעובדים בשיתוף פעולה איתם.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>קהל היעד וקונטקסט השימוש</h2>
          <div className={styles.sectionTitleUnderline}></div>
        </div>
        <p className={styles.bodyText}>
          קהל היעד הוא אוצרים ועובדי המוזיאון. האפליקציה נועדה להקל על האוצרים להזמין יצירות לתערוכות שהם בונים. האפליקציה נמצאת בשימוש בזמן תכנון תערוכה, בבית או במשרד.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>מה אנחנו בונים?</h2>
          <div className={styles.sectionTitleUnderline}></div>
        </div>

        <p className={styles.bodyText}>
          ממשק אשר מאגד את כל המידע והטפסים אשר נדרשים לשינוע של יצירות במוזיאון. לכל יצירה יש ״פרופיל״ שם נמצא כל המידע הבירוקרטי הנדרש למשלוח שלה אל האוצר. לאוצר יש אופציה לפתוח ״קבוצה״ שבה הוא מבקש רשימה של יצירות הרלוונטיות לתערוכה שהוא בונה, הוא ממלא את פרטי החדר בו מתקיימת התערוכה,
        </p>
        </section>

        <p className={styles.highlightText}>
          הממשק מפשט ומבצע את התהליך הבירוקרטי במקומו.
        </p>
        <p className={styles.bodyText}>
          בגלל שקהל היעד מורכב בעיקר מאוצרים שרגילים לתהליך עבודה מסורתי של העברת יצירות במשך שנים, ניתן לבצע  תהליך Onboarding במוזיאון ישראל לכל משתמשי האפליקציה שיקל על הטמעת האפליקציה והשימוש בה בצורה יעילה , כך שהמעבר לשיטה דיגיטלית יהיה חלק, מהיר וברור לכולם.
        </p> 
      

      <section className={styles.section}>
        <div style={{ marginBottom: '6px' }} className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>מה אנחנו לא בונים?</h2>
          <div className={styles.sectionTitleUnderline}></div>
        </div>
        
        <div className={styles.bodyText}>
        <div className={styles.bulletItem}>
          <p className={styles.bulletText}>לא רשת חברתית לאמנים</p>
          <div className={styles.bulletIcon}></div>
        </div>
        <div className={styles.bulletItem}>
          <p className={styles.bulletText}>לא מקום למכור יצירות</p>
          <div className={styles.bulletIcon}></div>
        </div>
        <div className={styles.bulletItem}>
          <p className={styles.bulletText}>לא פלטפורמה לקהל לציבור הרחב - כלי מקצועי לאמנים ואוצרים בלבד</p>
          <div className={styles.bulletIcon}></div>
        </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>הפתרון שלנו</h2>
          <div className={styles.sectionTitleUnderline}></div>
        </div>
        <p className={styles.bodyText}>
          ממשק אשר מאגד את כל המידע, הטפסים והפעולות אשר נדרשים לשינוע של יצירות במוזיאון. לכל משתמש יש פרופיל אישי, ובו ריכוז של כלל היצירות באחריותו. כמו כן, עבור כל יצירה מוזן כל המידע הבירוקרטי הנדרש למשלוח שלה אל האוצר.
        </p>
      </section>

      <p className={styles.highlightText}>
        הממשק יפשט ויאיץ את תהליך הקמת התערוכה, ויבטל את הצורך בהתמודדות עם בירוקרטיה עודפת .
      </p>
    </div>
    </>
  );
}
