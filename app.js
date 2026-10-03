(function () {
var C = {"prefix":"nafs_he","norm":"he","locale":"he","dir":"rtl","htmlLang":"he","appName":"נפש","brandSub":"עזרה עצמית רגועה","pageTitle":"נפש | עזרה עצמית","meta":"נפש הוא מדריך עזרה עצמית: שאלון מצב רוח וחרדה ככלי סינון ולא אבחון, מענה לפי מילות מפתח, תוכנית ימים, ונשימה. לא תחליף למטפל מורשה.","noscript":"זה מדריך לעזרה עצמית. הוא לא מטפל מורשה, לא אבחון, ולא תחליף לטיפול. האפליקציה צריכה ג׳אווה־סקריפט ורצה על המכשיר בלי אינטרנט חיצוני.","disclaimer":"זה מדריך לעזרה עצמית. הוא לא מטפל מורשה, לא אבחון, ולא תחליף לטיפול.","medNote":"אין כאן המלצה על תרופה, מינון, או שינוי בטיפול שנרשם. את זה קובעים רופא או רוקח. אם יש מקום, נדבר רק על עזרה עצמית בלי תרופות.","diagNote":"אין כאן אבחון, ואי אפשר לדעת מכאן אם יש שם למצב. מה שיש זה תיאור כללי של כלים לעזרה עצמית, והשאלון הוא טווח משוער ולא אבחנה.","guideNote":"התשובות הן כיוון כללי מכלים מוכרים של עזרה עצמית, לא טיפול אישי ולא פגישה עם מטפל. אם הקושי כבד, כדאי לדבר עם איש מקצוע מורשה.","choices":[{"v":0,"t":"בכלל לא"},{"v":1,"t":"כמה ימים"},{"v":2,"t":"יותר מחצי מהימים"},{"v":3,"t":"כמעט כל יום"}],"phq":["עניין מועט או הנאה מועטה מלעשות דברים","תחושת דכדוך, עצבות או חוסר תקווה","קושי להירדם, להישאר ישנים, או שינה מרובה מדי","עייפות או מעט אנרגיה","תיאבון חלש או אכילה מרובה מדי","תחושה רעה כלפי עצמך, תחושת כישלון, או אכזבה של עצמך או של המשפחה","קושי להתרכז בדברים, למשל בקריאה או בצפייה בטלוויזיה","תנועה או דיבור איטיים עד כדי כך שאחרים עלולים לשים לב, או ההפך: חוסר מנוחה ותזוזה יותר מהרגיל","מחשבות שעדיף להיות מת, או מחשבות על פגיעה בעצמך"],"gad":["תחושת עצבנות, חרדה, או מתח על הקצה","קושי להפסיק לדאוג או לשלוט בדאגה","דאגה מוגזמת לגבי דברים שונים","קושי להירגע","חוסר מנוחה עד כדי קושי לשבת בשקט","התרגזות או עצבנות בקלות","תחושת פחד כאילו משהו רע עומד לקרות"],"areas":[{"id":"sleep","label":"שינה"},{"id":"relationships","label":"יחסים"},{"id":"grief","label":"אבל או אובדן"},{"id":"anger","label":"כעס"},{"id":"work","label":"עומס בעבודה"}],"sleepItems":[{"id":"caffeine","label":"הקפאין נגמר מוקדם, לא בשעות המאוחרות"},{"id":"screen","label":"פחות מסך בערך שעה לפני השינה"},{"id":"wake","label":"שעת קימה קבועה מחר, עד כמה שאפשר"},{"id":"bed","label":"המיטה לשינה, לא לגלילה של מחשבות"},{"id":"wind","label":"הרגעה קצרה לפני המיטה, בערך חצי שעה"}],"breath":{"m468":"4-4-6","box":"קופסה 4-4-4-4"},"phases":{"in":"שאיפה","hold":"החזקה","out":"נשיפה","holdOut":"החזקה בחוץ"},"bands":{"phq":[{"key":"severe","name":"גבוה מאוד","plain":"מה שסימנת דומה למצוקת מצב רוח בטווח גבוה מאוד"},{"key":"modsevere","name":"גבוה","plain":"מה שסימנת דומה למצוקת מצב רוח בטווח גבוה"},{"key":"moderate","name":"בינוני","plain":"מה שסימנת דומה למצוקת מצב רוח בטווח בינוני"},{"key":"mild","name":"קל","plain":"מה שסימנת דומה למצוקת מצב רוח בטווח קל"},{"key":"minimal","name":"מעט","plain":"מה שסימנת נמצא בטווח הנמוך בשאלות מצב הרוח"}],"gad":[{"key":"severe","name":"גבוה","plain":"מה שסימנת דומה לחרדה ומתח בטווח גבוה"},{"key":"moderate","name":"בינוני","plain":"מה שסימנת דומה לחרדה ומתח בטווח בינוני"},{"key":"mild","name":"קל","plain":"מה שסימנת דומה לחרדה ומתח בטווח קל"},{"key":"minimal","name":"מעט","plain":"מה שסימנת נמצא בטווח הנמוך בשאלות החרדה"}]},"ui":{"recHigh":"הציונים בטווח הגבוה. חשוב לפגוש מטפל או מטפלת עם רישיון בקרוב. המדריך הזה גיבוי בצד, לא תחליף.","recMid":"הציונים בטווח הבינוני. שווה שיהיה איש מקצוע בתמונה אם הקושי נמשך או פוגע בשינה, בעבודה או ביחסים.","recLow":"הציונים לא בטווח הגבוה. התוכנית הקצרה היא בחירה לתרגול, לא בגלל אבחנה. אם בכל זאת היום כבד, אפשר לדבר עם איש מקצוע.","rounds":"כמה סבבים?","ready":"מוכנים","start":"התחלה","stop":"עצירה","ok":"בסדר","breathHint":"העיגול גדל בשאיפה וקטן בנשיפה. אם יש סחרחורת, עוצרים.","breathNote":"מה הרגשת בגוף אחרי הנשימה?","sleepNote":"הערה ללילה הזה","breathDone":"הסבב נגמר. אפשר לחזור לנשימה רגילה.","cycleLabel":"סבב {n} מתוך {total}","holdTitle":"התרגילים מושהים","holdBody":"בפעם הקודמת היה ניסוח או תשובה שקשורים לסכנה. לכן לא ממשיכים עכשיו עם המדריך, התוכנית או הנשימה.","holdStill":"אם עדיין יש סכנה, מתקשרים ל־1201 או ל־101, או הולכים לחדר מיון קרוב.","numbers":"מספרי עזרה","clearHold":"אני במקום בטוח, ואפשר לחזור לתרגילים","navHome":"בית","navCheck":"צ׳ק־אין","navGuide":"מדריך","navPlan":"תוכנית","navBreath":"נשימה","history":"היסטוריה","eyebrow":"עזרה עצמית, בלי רעש","lead":"אם היום לוחץ, אפשר לבדוק איך עברו השבועיים, לקחת צעד קטן, או רק לנשום. נפש היא לא קליניקה, אין כאן אבחון, ואין הבטחה לתוצאה.","homeMethods":"הכלים כאן מוכרים מעזרה עצמית: סידור מחשבות, חזרה לתנועה קטנה, נשימה, הרגלי שינה, פתרון בעיה בצעדים, מקום לאבל, ודיבור במשפט של «אני».","homeBreath":"קח נשימה. לא חייבים לסדר הכול היום.","tileCheck":"מצב רוח וחרדה","tileCheckSub":"שאלות סינון, לא אבחון. נשמר אצלך במכשיר.","tileGuide":"ספר מה לוחץ","tileGuideSub":"התאמה מקומית לכלי מוכר, וצעד שאפשר לעשות עכשיו.","tilePlan":"תוכנית לימים","tilePlanSub":"5, 10 או 14 יום, לפי הציון הגבוה.","tileBreath":"נשימה","tileBreathSub":"עיגול בקצב 4-4-6 או קופסה, בלי רשת.","localNote":"התשובות נשארות על המכשיר הזה. בלי חשבון ובלי שרת.","safetyLink":"אם יש סכנה לך או למישהו אחר עכשיו, כאן המספרים.","checkKicker":"שאלון עזרה, לא אבחון","checkTitle":"איך עברו השבועיים?","checkIntro":"שאלות מצב הרוח בנויות על פריטי PHQ-9, ושאלות החרדה על פריטי GAD-7, בניסוח עברי ברור. זו לא הגרסה הרשמית של מרפאה, ולא נותנים כאן שם למצב.","checkScale":"כל פריט מ־0 עד 3: בכלל לא, כמה ימים, יותר מחצי מהימים, כמעט כל יום. עונים על השבועיים האחרונים, לא על כל החיים.","checkStart":"אפשר להתחיל","moodQ":"שאלות מצב רוח · סינון לא אבחון","anxQ":"שאלות חרדה · סינון לא אבחון","qProgress":"שאלה {n} מתוך {total} — בשבועיים האחרונים","item9warn":"השאלה הזו על בטיחות. עונים בכנות. אם התשובה אינה «בכלל לא», עוצרים את התרגילים ומראים מספרי עזרה.","back":"הקודם","areasTitle":"יש משהו שלוחץ יותר?","areasBody":"אפשר לסמן תחומים שמתאימים לתקופה הזו. לא חובה, ואפשר יותר מאחד. התרגילים שלהם יגיעו מוקדם יותר בתוכנית.","showRange":"הצג את הטווח","noResult":"עדיין אין תוצאה. מתחילים בשאלון.","replacePlan":"ברור לי שהתוכנית החדשה מחליפה את ההתקדמות הישנה ({done} ימים הושלמו).","replaceErr":"יש לסמן את התיבה אם מחליפים את התוכנית הישנה.","resultTitle":"טווח, לא שם של מצב","moodScore":"שאלות מצב רוח","anxScore":"שאלות חרדה","of27":"מתוך 27 · {name}","of21":"מתוך 21 · {name}","cutoffExplain":"החיבור הוא בדרך המקובלת: כל פריט מ־0 עד 3. חתכי מצב רוח נפוצים: 0–4 מעט, 5–9 קל, 10–14 בינוני, 15–19 גבוה, 20–27 גבוה מאוד. חתכי חרדה: 0–4 מעט, 5–9 קל, 10–14 בינוני, 15–21 גבוה.","lengthExplain":"אורך התוכנית לפי הציון הגבוה מבין השניים: 0–9 חמישה ימים, 10–14 עשרה ימים, ו־15 ומעלה ארבעה־עשר יום. עכשיו התוכנית היא {len} ימים.","areasChosen":"התחומים שסומנו: {names}.","noAreas":"לא סומן תחום נוסף, וזה בסדר.","listSep":", ","startPlan":"התחלת תוכנית של {len} ימים","newCheck":"שאלון חדש","seeHistory":"להיסטוריה","guideTitle":"מה קורה עכשיו","guideIntro":"אפשר לכתוב בשתי שורות, כמו למישהו קרוב. יש כאן מנוע מילים מקומי, לא אדם ולא מודל חכם, והוא עונה מכלים מוכרים.","guideLabel":"מה לוחץ","guideRun":"צעד להרגע","guideEmpty":"כתוב קצת על מה שלוחץ, כדי למצוא צעד שמתאים למילים.","medsTitle":"על תרופות","medsBody":"אם רוצים לראות טווח של מצב רוח וחרדה בלי לתת שם למצב, השאלון כאן. גם הוא אינו אבחון.","toCheck":"לשאלון","pstKicker":"פתרון בעיה בצעדים","pstTitle":"מסדרים בעיה אחת","pstIntro":"לא נמצא נושא מוכן קרוב למה שנכתב. זה בסדר. נפרק את זה לבעיה אחת ולצעד אחד, במקום שכל הדאגות יישארו בערמה.","stepsH":"הצעדים","exerciseH":"תרגיל לעכשיו","whatH":"מה קורה כאן","stepsNow":"צעדים עכשיו","pstExercise":"ממלאים את השדות. המטרה היא ניסיון קטן, לא פתרון סופי. שווה גם למלא את השאלון כדי שהתוכנית תתיישר לימים.","altTopic":"יש גם נושא קרוב: {title}. אם זה מה שרצית, כתוב אותו במשפט ברור יותר.","openBreath":"פתיחת שעון הנשימה","noPlan":"עדיין אין תוכנית","noPlanBody":"קודם השאלון. לפי הציון הגבוה נקבע האורך: 5 ימים אם 0 עד 9, 10 אם 10 עד 14, ו־14 אם 15 או יותר. התוכנית נשמרת על המכשיר, ובכל יום יש שיעור קצר ותרגיל למילוי.","yourPlan":"התוכנית שלך","planProgress":"{done} מתוך {total} ימים. ההתחלה {start}.","todayKicker":"משימת היום · יום {n}","openToday":"פתיחת משימת היום","allDays":"כל הימים","dayTitle":"יום {n} · {title}","stDone":"הושלם","stToday":"משימת היום","stOpen":"פתוח","stLocked":"נפתח ביומו","missingDay":"היום הזה לא נמצא בתוכנית.","backPlan":"חזרה לתוכנית","lockedBody":"היום הזה עוד לא הגיע. הוא נפתח לפי התאריך בירושלים, כדי שהתוכנית תישאר בקצב.","daySaved":"היום נשמר. טוב שהיה צעד קטן.","dayKicker":"יום {n} מתוך {total} · {method}","markDone":"סימון שהיום הושלם","doneCheck":"היום הושלם","undoDone":"ביטול ההשלמה","needContent":"כותבים משהו קטן, או מסמנים פריט, לפני שמסמנים שהיום הושלם.","breathTitle":"נשימה עכשיו","breathIntro":"בוחרים קצב. 4-4-6 זה שאיפה 4, החזקה 4, נשיפה 6. בקופסה ארבע צלעות, כל אחת 4. זה רץ על המכשיר בלי רשת.","noHistory":"עדיין אין שאלונים שמורים על המכשיר הזה.","crisisHistory":"השימוש נעצר סביב בטיחות. לא נבנתה תוכנית מהרשומה הזו, ואין כאן פירוט של הסיכון.","histLine":"מצב רוח {phq} מתוך 27 · {phqName} · חרדה {gad} מתוך 21 · {gadName} · תוכנית {len} ימים","histTitle":"היסטוריית שאלונים","histNote":"השעות לפי שעון ירושלים. ההיסטוריה רק אצלך.","clearYes":"בטוח, למחוק שאלונים ותוכנית","clearNo":"לא, להשאיר","clearAsk":"מחיקת שאלונים ותוכנית מהמכשיר","crisisTitle":"הבטיחות חשובה מכל תרגיל","crisisBody":"מה שהגיע קשור לסכנה לך או למישהו אחר. לא נותנים כאן צעדים או תרגילים, ולא ממשיכים את התוכנית עכשיו.","crisisCall":"מתקשרים עכשיו, או מבקשים ממישהו קרוב להתקשר:","eranLabel":"ער״ן, עזרה ראשונה נפשית, 24 שעות","emergencyLabel":"חירום","goER":"הולכים לחדר מיון קרוב אם יש סכנה מיידית.","outside":"מחוץ לאזור הזה, מתקשרים למספר החירום המקומי או לבית חולים קרוב.","crisisBack":"חזרה","crisisBackHold":"אם אתה במקום בטוח, חזרה הביתה. התרגילים נשארים מושהים עד אישור שהמצב בטוח"},"chips":[["הלב דופק ואני בחרדה שמשהו יקרה","חרדה"],["אין לי כוח ולא בא לי לעשות כלום","מצב רוח"],["יש נדודי שינה ואני לא נרדם","שינה"],["אני כועס ובא לי לצעוק","כעס"],["אחרי האובדן כבד לי ואני מתגעגע","אבל"],["אני חושב יותר מדי ולא מצליח לעצור","מחשבות"]],"pstSpec":[["problem","הבעיה במשפט"],["goal","מטרה קטנה"],["options","שלוש אפשרויות"],["choice","מה מנסים, ומה הצעד הראשון ומתי"]],"pstSteps":["מגדירים את הבעיה במשפט: מה קרה, מי מושפע, וממתי.","שמים מטרה קטנה לשבוע הזה, לא שינוי של כל החיים.","כותבים לפחות שלוש אפשרויות, גם «לא לעשות כלום».","ליד כל אפשרות: מה יכול לעזור, ומה המחיר.","בוחרים אפשרות אחת, וקובעים צעד ראשון של עשר דקות ומתי.","אחרי הניסיון בודקים: ממשיכים, משנים, או מנסים אפשרות אחרת."],"medKeys":["תרופה","תרופות","כדור","כדורים","מינון","זנקס","ציפרלקס","פרוזק","סרוקסט","ואליום","בנזו","נוגד דיכאון","נוגד חרדה","medication","medicine","antidepress","prozac","sertraline","zoloft","xanax","valium","benzo","mg","dose"],"diagKeys":["תאבחן אותי","תאבחני","מה האבחנה","האם יש לי דיכאון","יש לי דיכאון","אני בדיכאון","האם אני בדיכאון","diagnose me","do i have depression","am i depressed","what is my diagnosis"],"idioms":["לא רוצה למות","לא בא לי למות","אין לי רצון למות","בא לי למות מצחוק","בא לי למות מרעב","בא לי למות משעמום","בא לי למות מעייפות","רוצה למות מצחוק","רוצה למות מרעב","רוצה למות משעמום","למות מצחוק","למות מרעב","למות משעמום","למות מעייפות","אמות מצחוק","מת מצחוק","מתה מצחוק","מתים מצחוק","מת מרעב","מת משעמום","מת מעייפות","מת מבושה","לא אובדנ","לא מתאבד","לא אתאבד","dont want to die","do not want to die","don t want to die","not suicidal","am not suicidal","not going to kill myself","wont kill myself","will not kill myself","would not kill myself","want to die of laughter","want to die of laughing","want to die laughing","dying of laughter","dying laughing","dying of hunger","dying of boredom","dying of embarrassment","dying of shame","dying of exhaustion","youre killing me","you are killing me","this is killing me"],"crisis":["התאבד","אובדנ","פגיעה עצמית","לפגוע בעצמי","אפגע בעצמי","לחתוך את עצמי","חותך את עצמי","לשרוף את עצמי","רוצה למות","רוצה שאמות","בא לי למות","נמאס לי לחיות","לא רוצה לחיות","עדיף לי למות","עדיף שלא אחיה","להרוג את עצמי","אהרוג את עצמי","לפגוע במישהו","להרוג מישהו","להרוג אותו","להרוג אותה","ארצה להרוג","self\\s?harm","suicid","kill myself","killing myself","want to die","wanna die","end my life","end it all","hurt myself","harm myself","cut myself","want to hurt someone","kill (him|her|them|someone)","hurt (someone|him|her|them)","harm (someone|him|her|them)","\\bmurder\\b"],"topics":[{"id":"anxiety","title":"כשהחרדה או הפאניקה עולות","method":"נשימה איטית ועיגון בחושים","what":"כשהחרדה עולה, הגוף נכנס לכוננות כאילו יש סכנה, גם כשאין סכנה מול העיניים עכשיו. הלב מאיץ, הנשימה נתפסת, המחשבות רצות. זו תגובה מוכרת, והיא לא אומרת שמאבדים שליטה.","steps":["כפות הרגליים על הרצפה, ונותנים שם לחמישה דברים שרואים.","מאריכים את הנשיפה: שאיפה 4, החזקה 4, נשיפה 6. חוזרים חמש פעמים, ועוצרים אם יש סחרחורת.","משפט קרקע: «זו חרדה, זה יעבור, ואני עכשיו במקום הזה.»"],"exerciseTitle":"נשימת 4-4-6 עכשיו","toBreath":true,"exercise":"יושבים בנוח. שאיפה מהאף עד 4, החזקה עד 4, נשיפה מהפה עד 6. אחרי כל נשיפה נותנים שם לצבע אחד מול העיניים. אם יש סחרחורת, עוצרים וחוזרים לנשימה רגילה.","pad":"אחרי הסבב, דבר אחד שראית","keys":[["חרדה",4],["חרד",3],["חרדה",3],["פאניקה",4],["התקף חרדה",4],["panic",4],["anxiety",3],["הלב דופק",4],["לב דופק",4],["לחוץ",2],["חרדתי",3],["פוחד",2],["נחנק",3]]},{"id":"mood","title":"כשאין כוח והמצב רוח כבד","method":"הפעלה התנהגותית: תנועה קטנה לפני החשק","what":"מצב רוח נמוך מוריד אנרגיה, ואז דוחים דברים, והדחייה מוסיפה משקל. כלי מוכר מתחיל בפעולה קטנה לפני התחושה. לא חייבים להרגיש מוכנים כדי להתחיל.","steps":["בוחרים משימה של בערך עשר דקות, לא תיקון של כל היום.","עושים אותה גם בלי חשק. התנועה קודם, והמצב רוח אולי יצטרף ואולי לא.","אחרי זה רושמים תחושה מ־0 עד 10, בלי משפט על האופי."],"exerciseTitle":"שלושה דברים קטנים","exercise":"כותבים שלושה דברים קטנים להיום, כמו רחיצת פנים, הליכה של חמש דקות, או סידור פינה. בוחרים אחד וקובעים מתי מתחילים, עדיף תוך שעה.","pad":"שלושת הדברים ומתי הראשון","keys":[["עצוב",3],["עצב",2],["מדוכא",3],["דיכאון",2],["אין לי כוח",4],["לא בא לי",3],["בלי חשק",4],["יאוש",3],["מצב רוח ירוד",4],["low mood",3],["אין לי אנרגיה",3],["לא בא לי לעשות כלום",4]]},{"id":"sleep","title":"כשהשינה בורחת","method":"הרגלי שינה","what":"נדודי שינה קורים הרבה כשהמיטה נקשרת לערות ולמחשבות. הגוף נשאר דרוך. הרגלי שינה מחזירים לאט את הקשר בין המקום לבין נמנום. זה סדר של זמן ומקום, לא תרופה.","steps":["קובעים שעת קימה למחר, גם אם נרדמים מאוחר הלילה.","אם השינה לא מגיעה בערך תוך עשרים דקה, קמים למקום שקט בלי מסך, וחוזרים כשיש נמנום.","מסיימים קפאין מוקדם, ומורידים מסך בערך שעה לפני השינה."],"exerciseTitle":"פתק הרגעה ללילה","exercise":"כותבים את שעת הקימה למחר, ודבר אחד שירגיע לפני המיטה: אור חלש, כמה עמודים מספר, או נשימה איטית רחוק מהמיטה.","pad":"שעת קימה ומה מרגיע","keys":[["נדודי שינה",4],["לא נרדם",4],["לא ישן",3],["אינסומניה",4],["insomnia",4],["נדודי",4],["מתעורר מוקדם",3],["לא מצליח לישון",4],["סובל מנדודי",4]]},{"id":"anger","title":"כשהכעס מקדים את המילה","method":"הפסקה קצרה, ואז משפט של אני","what":"כעס הוא סימן שקו נחצה. הגוף מתמלא מהר, והמילה הראשונה יוצאת לרוב חדה יותר ממה שהתכוונו. המטרה אינה למחוק את הכעס. המטרה לבחור מה עושים איתו לפני שמתחרטים על המשפט.","steps":["מתרחקים לכמה דקות: מים, הליכה קצרה, או חדר אחר. זו הפסקה, לא הפסד.","נותנים שם לאיפה הכעס בגוף: לסת, כתפיים, חום, או יד קפוצה.","כשהעוצמה יורדת קצת, אם צריך לדבר, משתמשים במשפט של אני ולא בהאשמה."],"exerciseTitle":"המשפט מוכן לפני שאומרים אותו","exercise":"כותבים: «כשקרה …, הרגשתי …, ואני צריך …». הבקשה דבר ברור שהצד השני יכול לעשות, ובלי «תמיד» אם אפשר.","pad":"משפט אני מוכן","keys":[["כעס",4],["כועס",4],["עצבני",3],["בא לי לצעוק",4],["לצעוק",3],["anger",3],["angry",3],["רותח",3],["מתעצבן",3]]},{"id":"grief","title":"כשהאובדן נשאר בחדר","method":"אבל כגל, לא כתקלה","what":"אבל אחרי אובדן אינו מחלה, ואינו סולם שחייבים לטפס בו לפי הסדר. הוא בא בגלים, יום כבד ויום קל יותר. אין דרך אחת נכונה. הימנעות מלאה, או לחץ לסיים מהר, שניהם מכבידים.","steps":["נותנים לאובדן משפט גלוי, בלי לרכך אותו במשפט מוכן.","נותנים לגל זמן קצר, בערך עשר דקות של כתיבה או דיבור, ואז חוזרים לצעד קטן ביום.","אם יש אדם בטוח, אומרים לו משפט אחד על מה שחסר. לא חייבים את הכול."],"exerciseTitle":"זיכרון ומשהו עדין לעצמך","exercise":"כותבים זיכרון קטן, ודבר עדין אחד להיום: אוכל, מים, שיחה קצרה, או יציאה לשמש. עדינות אינה שכחה.","pad":"הזיכרון והדבר העדין","keys":[["אבל",4],["נפטר",4],["נפטרה",4],["אובדן",4],["מתגעגע",3],["מתגעגעת",3],["grief",4],["אחרי המוות",3],["איבדתי",3],["הלוויה",3],["שכול",4]]},{"id":"relationship","title":"כשהריב סוגר את הדיבור","method":"דיבור במשפט של אני","what":"ריב מתחיל לעיתים ב«אתה תמיד» או ב«אף פעם». הצד השני שומע האשמה ומגן, והשיחה נסגרת. משפט של אני מדבר על תחושה ועל בקשה, לא על משפט.","steps":["אם הקול גבוה והגוף דולק, דוחים את השיחה לפחות רבע שעה.","מסדרים משפט: מה קרה, מה הרגשת, ובקשה אחת ברורה.","בוחרים זמן קצר לדיבור, לא חקירה כשעדיין רותחים."],"exerciseTitle":"כותבים את המשפט לפני ששולחים","exercise":"כותבים כאן: «כשקרה … הרגשתי … ואני צריך …». קוראים. אם יש האשמה מוחלטת, מחליפים מילה ואז מחליטים אם לשלוח.","pad":"משפט אני","keys":[["זוגיות",3],["בת זוג",4],["בן זוג",4],["אשתי",3],["בעלי",3],["ריב",4],["מריבה",4],["לא מבין אותי",4],["relationship",3],["partner",2],["נפרדנו",3],["הפרטנר",3]]},{"id":"overthinking","title":"כשהמחשבות מסתובבות ולא עוצרות","method":"חלון דאגה","what":"חשיבת יתר מנסה לתפוס סכנה שעוד לא כאן, על ידי חזרה על אותן מחשבות. החזרה נראית כמו עבודה, אבל היא לא תוכנית. חלון דאגה נותן למחשבות שעה, ומשחרר את שאר היום לצעד אחד.","steps":["כותבים את המחשבה במשפט אחד, כמו שהיא, בלי ליטוש.","שואלים: יש פעולה קטנה שאפשר לעשות היום, או שזה תרחיש שעוד רחוק?","אם אין פעולה עכשיו, שמים את זה בחלון של 15 דקות, וחוזרים לדבר אחד שנמצא מול העיניים."],"exerciseTitle":"קובעים את החלון של היום","exercise":"כותבים את הדאגה, בוחרים שעה לחלון, וכותבים דבר אחד שעושים עכשיו מחוץ לו. כשמגיעה השעה, רבע שעה בלבד, ואז סוגרים את הדף.","pad":"הדאגה, שעת החלון, ופעולה עכשיו","keys":[["חשיבת יתר",4],["חושב יותר מדי",4],["overthink",4],["לא מצליח להפסיק לחשוב",4],["מחשבות חוזרות",3],["רומינציה",4],["תרחישים",2],["לופ בראש",4]]},{"id":"loneliness","title":"כשהבדידות תופסת מקום","method":"קשר קטן, לא מושלם","what":"בדידות אומרת שאתה מנותק, ואז יורד הרצון לדבר עם מישהו, והמעגל גדל. קשר לא חייב להיות עמוק כדי לשנות משהו. שתי שורות לאדם אחד עדיפות על תוכנית גדולה שלא קורית.","steps":["בוחרים אדם אחד, לא רשימה.","כותבים הודעה קצרה, אפילו «מה נשמע, עלית לי».","מזכירים לעצמך: בדידות היא תחושה עכשיו, לא פסק דין שאין מקום לאנשים."],"exerciseTitle":"הודעה של שתי שורות","exercise":"כותבים את נוסח ההודעה, ומתי היא תישלח תוך 24 שעות. אם השליחה כבדה מדי עכשיו, כותבים מקום עם אנשים שאפשר לעבור בו היום בלי שיחה ארוכה.","pad":"נוסח ההודעה או המקום","keys":[["בדידות",4],["בודד",4],["בודדה",4],["לבד",2],["lonely",4],["loneliness",4],["אין אף אחד",4],["מנותק",3],["אף אחד לא מדבר איתי",4]]},{"id":"burnout","title":"כשהעבודה שואבת","method":"מורידים עומס לפני שהשחיקה גדלה","what":"שחיקה מלחץ ארוך נראית כמו עייפות, קהות, ומעט משמעות. זה לא עצלנות ולא חולשה באופי. הפסקה קצרה וגבול ברור הם חלק משמירה על עצמך, לא פרס שצריך להרוויח קודם.","steps":["שמים היום הפסקה אמיתית, גם של 15 דקות, בלי מסך של עבודה.","כותבים דבר אחד שאפשר להוריד או לדחות, גם אם הוא קטן.","חוזרים למשהו שיש בו משמעות, לא רק פריט שנמחק מרשימה."],"exerciseTitle":"שלוש משבצות להיום","exercise":"כותבים: מה נדחה או נעצר, מתי ההפסקה היום, ושעת שינה שמנסים לשמור. מספרים מציאותיים, לא מושלמים.","pad":"הדחייה, ההפסקה, ושעת השינה","keys":[["שחיקה",4],["burnout",4],["עומס בעבודה",4],["נמאס לי מהעבודה",4],["מותש מהעבודה",4],["אין לי כוח לעבוד",4],["העבודה גומרת",3],["שחיקה בעבודה",5]]},{"id":"esteem","title":"כשהקול הקשה מכליל","method":"סידור המחשבה הקשה על עצמך","what":"הקול הקשה מדבר בהכללה: «אני תמיד נכשל» או «אני לא מספיק». זו מחשבה, לא תמונה מלאה שלך. בודקים ראיות, וכותבים משפט הוגן יותר עם עובדה, לא מחמאה ריקה שאי אפשר להאמין לה.","steps":["כותבים את המשפט הקשה כמו שהוא עבר.","כותבים ראיה בעדו, וראיה נגדו או פרט שההכללה מוחקת.","מפרידים בין מעשה לבין כל מי שאתה: קרה משהו לא מדויק, וזה לא אומר שהכול לא מדויק."],"exerciseTitle":"משפט קשה ומשפט הוגן יותר","exercise":"כותבים את המשפט הקשה, ואחר כך משפט הוגן יותר עם פרט מהמציאות. אם «אני מדהים» לא נכנס, לא כותבים אותו. כותבים משפט שאפשר לעמוד מולו.","pad":"שני המשפטים","keys":[["דימוי עצמי",4],["הערכה עצמית",4],["self esteem",4],["לא מספיק",4],["כישלון",3],["שונא את עצמי",4],["לא שווה",3],["אני אפס",4],["אני כישלון",4]]}],"templates":[{"id":"t1","title":"נשיפה ארוכה מהבהלה","method":"נשימה איטית","exercise":"breathing","lesson":"כשהגוף דרוך, נשיפה ארוכה נותנת אות של ביטחון. לא חייבים להרגיש רוגע מלא כדי שזה יועיל. עכשיו רק מאטים את הנשימה. אם יש סחרחורת, עוצרים וחוזרים לקצב רגיל."},{"id":"t2","title":"תנועה קטנה לפני החשק","method":"הפעלה התנהגותית","exercise":"activity","lesson":"מצב רוח כבד משכנע לחכות עד שנהיה מוכנים. הכלי המוכר הולך הפוך: מתחילים בפעולה קטנה, והחשק אולי יגיע אחר כך ואולי לא. מה שחשוב הוא שהדבר נעשה, לא שהוא הרגיש קל."},{"id":"t3","title":"המחשבה שבאמצע","method":"סידור מחשבות","exercise":"thought","lesson":"אירוע הופך לתחושה דרך מחשבה באמצע. אם יש בה «תמיד» או «אף פעם» או פסק דין על כל מי שאתה, כותבים ראיות בעד ונגד, ואז משפט הוגן יותר. זה כלי מעבודה קוגניטיבית, כאן כתרגיל עצמי ולא כפגישת טיפול."},{"id":"t4","title":"זמן לדאגה, לא כל היום","method":"חלון דאגה","exercise":"worry","lesson":"דחיית דאגה לשעה קבועה מאמנת את הראש שהוא לא חייב לעבוד כל הזמן. מחוץ לחלון כותבים את המחשבה וחוזרים לצעד אחד. בתוך החלון עוברים על הדף כרבע שעה וזהו."},{"id":"t5","title":"לילה שקט יותר","method":"הרגלי שינה","exercise":"sleep","lesson":"שינה מושפעת מקפאין מאוחר, ממסך, וממיטה שהפכה למקום מחשבה. אין כאן הבטחה להירדם הלילה. מסדרים תנאים שיקלו על נמנום בימים הקרובים."},{"id":"t6","title":"בעיה אחת בלבד","method":"פתרון בעיה בצעדים","exercise":"problem","lesson":"כשהכול פתוח, הראש קופא. בוחרים בעיה אחת, מטרה קטנה, כמה אפשרויות, וניסיון אחד. אחר כך בודקים. ההחלטה הראשונה לא חייבת להיות מושלמת."},{"id":"t7","title":"חזרה למקום שבו אתה","method":"עיגון בחושים","exercise":"senses","lesson":"כשהמחשבות רצות קדימה, החושים מחזירים לחדר. נותנים שם לדברים שרואים, שומעים ונוגעים. זו הפסקה כדי שהגוף יירגע קצת, לא בריחה מהבעיה. אחר כך חוזרים לצעד קטן."},{"id":"t8","title":"מדברים עליך, לא מאשימים","method":"משפט של אני","exercise":"istatement","lesson":"«אתה תמיד» סוגר את האוזן של הצד השני. משפט של אני כולל את מה שקרה, את התחושה, ובקשה ברורה. אפשר לכתוב אותו כאן גם אם לא שולחים היום. הכתיבה מסדרת, והשליחה החלטה נפרדת."},{"id":"t9","title":"הגל אינו טעות","method":"מקום לאבל","exercise":"grief","lesson":"לאבל אין סדר קבוע אצל כל האנשים. יש גל שמגיע פתאום ויש יום קל יותר, ושניהם מובנים. המטרה אינה לשכוח. המטרה ללכת עם הגל ולחזור לצעד קטן בחיים בלי להקשיח את עצמך."},{"id":"t10","title":"הפסקה לפני המילה","method":"הרגעת כעס","exercise":"anger","lesson":"כעס הוא אנרגיה מהירה, וההפסקה אינה חולשה. נותנים שם לתחושה בגוף, מתרחקים כמה דקות, וחוזרים במשפט של אני אם צריך לדבר. אם יש סכנה לך או לאחר, עוזבים את התרגיל ומתקשרים לקו העזרה או לחירום."},{"id":"t11","title":"הקול הקשה אינו שופט","method":"סידור מחשבת ערך עצמי","exercise":"esteem","lesson":"«אני כישלון» הוא משפט מוחלט. מפרידים בין משהו שקרה לבין פסק דין על כל האדם. כותבים ראיה, ומשפט הוגן יותר עם עובדה. לא חייבים לאהוב את עצמך היום. חייבים לא להאמין להכללה בלי בדיקה."},{"id":"t12","title":"דבר אמיתי ויש בו טעם","method":"הפעלה עדינה ותשומת לב לפרט","exercise":"gratitude","lesson":"לשים לב לדבר קטן אינו הצגה שהכול בסדר. זו תזכורת לפרט נכון, ולידה פעולה קטנה שיש בה ערך בשבילך. אם היום כבד ולא נמצא כלום, כותבים רק את הפעולה."},{"id":"t13","title":"דף ליום כבד","method":"תוכנית מראש ליום קשה","exercise":"hardday","lesson":"כשהאנרגיה נופלת, קשה להמציא תוכנית. כותבים אותה כשיש קצת יותר כוח: מי אדם בטוח, איזה תרגיל קצר, ומה יורד מהיום. אם המחשבות הופכות לפגיעה, עוצרים ופונים לקו העזרה ולחירום. תרגיל לא מספיק ברגע כזה."},{"id":"t14","title":"מה עבד אצלך","method":"סקירה עצמית","exercise":"review","lesson":"היום האחרון הוא כדי לראות מה עוזר לך, לא כדי ציון. אם הסימנים עדיין כבדים או פוגעים בחיים, זה זמן טוב לדבר עם מטפל מורשה. המדריך נשאר גיבוי בצד."}],"fieldsets":{"activity":[["morning","בוקר: דבר קטן ומתי","text"],["noon","צהריים או אחר הצהריים","text"],["evening","ערב","text"],["before","מצב רוח לפני, מ־0 עד 10","text"],["after","מצב רוח אחרי, מ־0 עד 10","text"]],"thought":[["situation","מה קרה? בקצרה","area"],["auto","המחשבה שעברה, כמו שהיא","area"],["feeling","התחושה והעוצמה מ־0 עד 100","text"],["fore","איזו ראיה בעד המחשבה?","area"],["against","איזו ראיה נגדה, או פרט שהיא מוחקת?","area"],["balanced","מחשבה הוגנת יותר","area"],["after","עוצמת התחושה אחרי הכתיבה, מ־0 עד 100","text"]],"worry":[["worries","המחשבות שמסתובבות, כל אחת בשורה","area"],["when","שעת חלון הדאגה היום","time"],["now","דבר אחד שעושים עכשיו מחוץ לחלון","text"]],"problem":[["problem","הבעיה במשפט אחד","area"],["goal","מטרה קטנה לשבוע","text"],["o1","אפשרות ראשונה","text"],["o2","אפשרות שנייה","text"],["o3","אפשרות שלישית, גם «לא לעשות כלום»","text"],["weigh","מה עוזר ומה המחיר בכל אפשרות?","area"],["choice","איזו אפשרות מנסים?","text"],["start","צעד ראשון של עשר דקות, ומתי","text"]],"senses":[["see","חמישה דברים שרואים עכשיו","area"],["hear","ארבעה דברים ששומעים","area"],["touch","שלושה דברים שנוגעים, כמו הכיסא או כפות הרגליים","area"]],"istatement":[["when","כשקרה…","text"],["feel","הרגשתי…","text"],["need","ואני צריך… בקשה ברורה","area"]],"grief":[["who","מי או מה האובדן, במשפט גלוי","text"],["memory","זיכרון קטן שרוצים לשמור","area"],["kind","דבר עדין לעצמך היום","text"]],"anger":[["body","איפה הכעס בגוף?","text"],["place","לאן הולכים בהפסקה?","text"],["minutes","כמה דקות ההפסקה?","text"],["line","משפט אני אם צריך לדבר","area"]],"esteem":[["harsh","המשפט הקשה כמו שהוא","area"],["fore","ראיה בעדו","area"],["against","ראיה נגדו או חריג","area"],["fair","משפט הוגן יותר עם פרט מהמציאות","area"]],"gratitude":[["g1","פרט נכון וקטן, אם נמצא","text"],["g2","פרט שני, לא חובה","text"],["g3","פרט שלישי, לא חובה","text"],["act","פעולה קטנה שיש בה טעם היום","text"]],"hardday":[["person","אדם בטוח, או קו העזרה אם אין","text"],["short","תרגיל קצר לחזור אליו: נשימה או הליכה","text"],["drop","דבר שיורד מהיום הזה","text"],["sleep","שעה לנסות לישון","time"]],"review":[["helped","איזה תרגיל עזר יותר?","area"],["hard","מה היה כבד ולא צריך האשמה?","area"],["repeat","דבר אחד שיחזור בשבוע הבא","text"],["pro","אם רוצים איש מקצוע, מה הצעד הראשון? שיחה, שאלה לחבר, או תור","area"]]}};
  "use strict";

  function fill(s, map) {
    return String(s).replace(/\{(\w+)\}/g, function (_, k) {
      return map[k] == null ? "" : String(map[k]);
    });
  }

  function norm(s) {
    var t = String(s || "").toLowerCase();
    if (C.norm === "ar") {
      return t
        .replace(/[\u064B-\u0652\u0640\u0670]/g, "")
        .replace(/[أإآٱ]/g, "ا")
        .replace(/ؤ/g, "و")
        .replace(/ئ/g, "ي")
        .replace(/ى/g, "ي")
        .replace(/ة/g, "ه")
        .replace(/[^\u0600-\u06FFa-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    if (C.norm === "he") {
      return t
        .replace(/[\u0591-\u05C7]/g, "")
        .replace(/ך/g, "כ")
        .replace(/ם/g, "מ")
        .replace(/ן/g, "נ")
        .replace(/ף/g, "פ")
        .replace(/ץ/g, "צ")
        .replace(/[^\u0590-\u05FFa-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    return t
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function lettersRe() {
    if (C.norm === "ar") return /[\u0600-\u06FFa-z0-9]/;
    if (C.norm === "he") return /[\u0590-\u05FFa-z0-9]/;
    return /[a-z0-9]/;
  }

  function scoreSum(arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i++) s += Number(arr[i]) || 0;
    return s;
  }

  function bandPhq(score) {
    var b = C.bands.phq;
    if (score >= 20) return b[0];
    if (score >= 15) return b[1];
    if (score >= 10) return b[2];
    if (score >= 5) return b[3];
    return b[4];
  }

  function bandGad(score) {
    var b = C.bands.gad;
    if (score >= 15) return b[0];
    if (score >= 10) return b[1];
    if (score >= 5) return b[2];
    return b[3];
  }

  function programLength(phq, gad) {
    var m = Math.max(Number(phq) || 0, Number(gad) || 0);
    if (m >= 15) return 14;
    if (m >= 10) return 10;
    return 5;
  }

  function recommendText(phq, gad) {
    var m = Math.max(phq, gad);
    if (m >= 15) return C.ui.recHigh;
    if (m >= 10) return C.ui.recMid;
    return C.ui.recLow;
  }

  function jerusalemToday(d) {
    var date = d || new Date();
    try {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Jerusalem",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).format(date);
    } catch (e) {
      return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
    }
  }

  function daysBetween(startISO, todayISO) {
    var as = String(startISO).split("-").map(Number);
    var bs = String(todayISO).split("-").map(Number);
    var a = Date.UTC(as[0], as[1] - 1, as[2]);
    var b = Date.UTC(bs[0], bs[1] - 1, bs[2]);
    return Math.floor((b - a) / 86400000);
  }

  function todayIndex(program, todayISO) {
    var diff = daysBetween(program.startDate, todayISO || jerusalemToday());
    if (diff < 0) diff = 0;
    return Math.min(program.days.length - 1, diff);
  }

  function compileList(list, flags) {
    var out = [];
    for (var i = 0; i < list.length; i++) {
      try { out.push(new RegExp(list[i], flags || "")); } catch (e) {}
    }
    return out;
  }

  var IDIOMS = compileList(C.idioms || [], "g");
  var CRISIS_RES = compileList(C.crisis || []);

  function stripCrisisIdioms(t) {
    var s = t;
    for (var i = 0; i < IDIOMS.length; i++) s = s.replace(IDIOMS[i], " ");
    return s;
  }

  function isCrisisText(raw) {
    var t = stripCrisisIdioms(norm(raw));
    if (!t) return false;
    for (var i = 0; i < CRISIS_RES.length; i++) {
      if (CRISIS_RES[i].test(t)) return true;
    }
    return false;
  }

  function isSelfHarmScore(v) {
    return Number(v) > 0;
  }

  function hasAny(raw, list) {
    var t = norm(raw);
    for (var i = 0; i < list.length; i++) {
      var p = norm(list[i]);
      if (p && t.indexOf(p) !== -1) return true;
    }
    return false;
  }

  function isMedicationAsk(raw) { return hasAny(raw, C.medKeys || []); }
  function isDiagnosisAsk(raw) { return hasAny(raw, C.diagKeys || []); }

  function hasTerm(text, term) {
    if (!term) return false;
    var arabic = lettersRe();
    var from = 0;
    while (from < text.length) {
      var i = text.indexOf(term, from);
      if (i < 0) return false;
      var before = i === 0 ? " " : text.charAt(i - 1);
      var afterI = i + term.length;
      var after = afterI >= text.length ? " " : text.charAt(afterI);
      if (!arabic.test(before) && !arabic.test(after)) return true;
      if (C.norm === "he" && term.length >= 4 && "בהוכלמש".indexOf(before) !== -1) {
        var before2 = i < 2 ? " " : text.charAt(i - 2);
        if (!arabic.test(before2) && !arabic.test(after)) return true;
      }
      from = i + 1;
    }
    return false;
  }

  var TOPICS = (C.topics || []).map(function (t) {
    return {
      id: t.id,
      title: t.title,
      method: t.method,
      what: t.what,
      steps: t.steps,
      exerciseTitle: t.exerciseTitle,
      exercise: t.exercise,
      toBreath: !!t.toBreath,
      pad: t.pad,
      keys: (t.keys || []).map(function (k) { return { p: norm(k[0]), w: k[1] }; })
    };
  });

  var TEMPLATES = C.templates || [];
  var FIELDSETS = C.fieldsets || {};
  var PHQ_ITEMS = C.phq;
  var GAD_ITEMS = C.gad;
  var AREAS = C.areas;
  var SLEEP_ITEMS = C.sleepItems;
  var CHOICES = C.choices;

  function rankTopics(raw) {
    var t = norm(raw);
    var ranked = [];
    for (var i = 0; i < TOPICS.length; i++) {
      var score = 0;
      var ks = TOPICS[i].keys;
      for (var j = 0; j < ks.length; j++) {
        if (hasTerm(t, ks[j].p)) score += ks[j].w;
      }
      if (score > 0) ranked.push({ topic: TOPICS[i], score: score });
    }
    ranked.sort(function (a, b) { return b.score - a.score; });
    return ranked;
  }

  function respond(raw) {
    if (!norm(raw)) return { type: "empty" };
    if (isCrisisText(raw)) return { type: "crisis" };
    var meds = isMedicationAsk(raw);
    var diag = isDiagnosisAsk(raw);
    var ranked = rankTopics(raw);
    if (meds && !ranked.length) return { type: "meds-only", meds: true, diag: diag };
    if (!ranked.length) return { type: "pst", meds: meds, diag: diag };
    var alt = null;
    if (ranked[1] && ranked[1].score >= 2 && ranked[0].score - ranked[1].score <= 2) alt = ranked[1].topic;
    return { type: "topic", topic: ranked[0].topic, alt: alt, meds: meds, diag: diag };
  }

  function selectDayIds(areas, length) {
    var boost = [];
    if (areas.sleep) boost.push("t5");
    if (areas.grief) boost.push("t9");
    if (areas.relationships) boost.push("t8");
    if (areas.anger) boost.push("t10");
    if (areas.work) boost.push("t6");
    var ordered = [];
    function add(id) { if (ordered.indexOf(id) === -1) ordered.push(id); }
    add("t1");
    var room = Math.max(0, length - 3);
    for (var i = 0; i < boost.length && i < room; i++) add(boost[i]);
    add("t2"); add("t3");
    TEMPLATES.forEach(function (t) { add(t.id); });
    return ordered.slice(0, length);
  }

  function buildProgram(opts) {
    var areas = opts.areas || {};
    var length = programLength(opts.phq, opts.gad);
    var ids = selectDayIds(areas, length);
    var days = ids.map(function (id, index) {
      var src = null;
      for (var i = 0; i < TEMPLATES.length; i++) if (TEMPLATES[i].id === id) src = TEMPLATES[i];
      return { id: src.id, index: index, title: src.title, method: src.method, lesson: src.lesson, exercise: src.exercise, completed: false, completedAt: null, answers: {} };
    });
    return { createdAt: new Date().toISOString(), startDate: opts.startDate || jerusalemToday(), length: length, phq: opts.phq, gad: opts.gad, areas: areas, checkinId: opts.checkinId || null, days: days };
  }

  function loadJSON(key, fallback) {
    try { var raw = localStorage.getItem(key); if (!raw) return fallback; return JSON.parse(raw); } catch (e) { return fallback; }
  }
  function saveJSON(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

  var K_CHECKINS = C.prefix + "_checkins";
  var K_PROGRAM = C.prefix + "_program";
  var K_PST = C.prefix + "_pst";
  var K_PAD = C.prefix + "_pad";
  var K_PENDING = C.prefix + "_pending";
  var K_HOLD = C.prefix + "_hold";

  function loadCheckins() { return loadJSON(K_CHECKINS, []); }
  function loadProgram() { return loadJSON(K_PROGRAM, null); }
  function saveProgram(p) { saveJSON(K_PROGRAM, p); }

  var state = { view: "home", dayId: null, crisis: null, hold: false, guideText: "", guide: null, pad: "", pst: {}, check: null, result: null, formError: "", confirmClear: false };
  var breath = { running: false, timer: null, mode: "468", phaseIdx: 0, left: 4, cycle: 0, totalCycles: 5, dayId: null, finishedMsg: "" };

  function breathModes() {
    return {
      "468": { label: C.breath.m468, phases: [{ name: C.phases.in, sec: 4, dir: "in" }, { name: C.phases.hold, sec: 4, dir: "hold" }, { name: C.phases.out, sec: 6, dir: "out" }] },
      box: { label: C.breath.box, phases: [{ name: C.phases.in, sec: 4, dir: "in" }, { name: C.phases.hold, sec: 4, dir: "hold" }, { name: C.phases.out, sec: 4, dir: "out" }, { name: C.phases.holdOut, sec: 4, dir: "hold" }] }
    };
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function setHold(on) {
    state.hold = !!on;
    try { if (on) sessionStorage.setItem(K_HOLD, "1"); else sessionStorage.removeItem(K_HOLD); } catch (e) {}
  }

  function triggerCrisis(reason) {
    state.crisis = { reason: reason };
    stopBreath(false);
    if (reason !== "manual") {
      setHold(true);
      try { localStorage.setItem(K_PENDING, reason); } catch (e) {}
    }
    render();
    var h = document.getElementById("crisis-title");
    if (h) h.focus();
  }
  function dismissCrisis() {
    var reason = state.crisis && state.crisis.reason;
    state.crisis = null;
    if (reason && reason !== "manual") {
      try { localStorage.removeItem(K_PENDING); } catch (e) {}
      setHold(true);
    }
    if ((location.hash || "").replace("#", "") !== "home") location.hash = "home";
    else render();
  }
  function freshCheck() {
    return { stage: "intro", qi: 0, phq: Array(PHQ_ITEMS.length).fill(null), gad: Array(GAD_ITEMS.length).fill(null), areas: {} };
  }
  function saveCheckin(entry) {
    var list = loadCheckins();
    list.unshift(entry);
    if (list.length > 80) list = list.slice(0, 80);
    saveJSON(K_CHECKINS, list);
    return entry;
  }
  function fmtWhen(iso) {
    try {
      return new Intl.DateTimeFormat(C.locale, { timeZone: "Asia/Jerusalem", numberingSystem: "latn", dateStyle: "medium", timeStyle: "short" }).format(new Date(iso));
    } catch (e) { return iso; }
  }
  function areaLabels(areas) {
    var names = [];
    AREAS.forEach(function (a) { if (areas && areas[a.id]) names.push(a.label); });
    return names;
  }
  function hasContent(day) {
    var a = day.answers || {};
    if (day.exercise === "breathing") return a.did === true || String(a.note || "").trim().length > 1;
    if (day.exercise === "sleep") {
      for (var i = 0; i < SLEEP_ITEMS.length; i++) if (a[SLEEP_ITEMS[i].id]) return true;
      return String(a.note || "").trim().length > 1;
    }
    var vals = Object.keys(a);
    for (var k = 0; k < vals.length; k++) {
      var v = a[vals[k]];
      if (v === true) return true;
      if (String(v || "").trim().length > 1) return true;
    }
    return false;
  }
  function fieldHTML(day, spec) {
    var key = spec[0], label = spec[1], type = spec[2];
    var val = day.answers[key] == null ? "" : String(day.answers[key]);
    if (type === "area") return '<label class="field">' + esc(label) + '<textarea data-day="' + esc(day.id) + '" data-key="' + esc(key) + '">' + esc(val) + "</textarea></label>";
    var inputType = type === "time" ? "time" : "text";
    return '<label class="field">' + esc(label) + '<input type="' + inputType + '" data-day="' + esc(day.id) + '" data-key="' + esc(key) + '" value="' + esc(val) + '"></label>';
  }
  function breathBlock(dayId) {
    var modes = breathModes();
    var opts = [4, 5, 6, 8].map(function (n) {
      return '<option value="' + n + '"' + (breath.totalCycles === n ? " selected" : "") + ">" + n + "</option>";
    }).join("");
    return '<div class="breathe-wrap" data-breath-day="' + esc(dayId || "") + '">' +
      '<div class="modes">' +
      '<button type="button" class="btn secondary' + (breath.mode === "468" ? " on" : "") + '" data-action="breath-mode" data-mode="468">' + esc(modes["468"].label) + "</button>" +
      '<button type="button" class="btn secondary' + (breath.mode === "box" ? " on" : "") + '" data-action="breath-mode" data-mode="box">' + esc(modes.box.label) + "</button></div>" +
      '<label class="field">' + esc(C.ui.rounds) + '<select id="breath-cycles">' + opts + "</select></label>" +
      '<div class="orb-box" aria-hidden="true"><div id="orb" class="orb" data-scale="0.68"></div></div>' +
      '<p id="phase-name" class="phase-name">' + esc(C.ui.ready) + '</p><p id="count-num" class="count">·</p><p id="cycle-label" class="muted"></p>' +
      '<p id="breath-done" class="okbox hidden"></p>' +
      '<button type="button" class="btn olive" id="breath-toggle" data-action="breath-toggle">' + esc(C.ui.start) + "</button>" +
      '<p class="muted">' + esc(C.ui.breathHint) + "</p></div>";
  }
  function exerciseHTML(day) {
    if (day.exercise === "breathing") {
      return breathBlock(day.id) + '<label class="field">' + esc(C.ui.breathNote) + '<textarea data-day="' + esc(day.id) + '" data-key="note">' + esc(day.answers.note || "") + "</textarea></label>";
    }
    if (day.exercise === "sleep") {
      var checks = SLEEP_ITEMS.map(function (it) {
        return '<label class="check"><input type="checkbox" data-day="' + esc(day.id) + '" data-key="' + it.id + '"' + (day.answers[it.id] ? " checked" : "") + ">" + esc(it.label) + "</label>";
      }).join("");
      return checks + '<label class="field">' + esc(C.ui.sleepNote) + '<textarea data-day="' + esc(day.id) + '" data-key="note">' + esc(day.answers.note || "") + "</textarea></label>";
    }
    return (FIELDSETS[day.exercise] || []).map(function (f) { return fieldHTML(day, f); }).join("");
  }
  function holdHTML() {
    return '<section class="card"><h1>' + esc(C.ui.holdTitle) + "</h1>" +
      "<p>" + esc(C.ui.holdBody) + "</p>" +
      "<p>" + esc(C.ui.holdStill) + "</p>" +
      '<div class="stack"><button type="button" class="btn block" data-action="safety-card">' + esc(C.ui.numbers) + "</button>" +
      '<button type="button" class="btn secondary block" data-action="clear-hold">' + esc(C.ui.clearHold) + "</button></div></section>";
  }
  function navHTML() {
    var items = [["home", C.ui.navHome], ["checkin", C.ui.navCheck], ["guide", C.ui.navGuide], ["program", C.ui.navPlan], ["breathe", C.ui.navBreath]];
    return '<nav class="nav">' + items.map(function (it) {
      var on = state.view === it[0] || (it[0] === "program" && state.view === "day");
      return '<button type="button" data-go="' + it[0] + '"' + (on ? ' class="on"' : "") + ">" + esc(it[1]) + "</button>";
    }).join("") + "</nav>";
  }
  function shell(content) {
    return '<header class="topbar"><button type="button" class="brand" data-go="home"><img class="mark" src="assets/mark.svg" alt=""><span><span class="brand-name">' + esc(C.appName) + '</span><span class="brand-sub">' + esc(C.brandSub) + "</span></span></button>" +
      '<button type="button" class="top-link" data-go="history">' + esc(C.ui.history) + "</button></header>" +
      '<p class="disclaimer">' + esc(C.disclaimer) + "</p><main>" + content + "</main>" + navHTML();
  }
  function viewHome() {
    return '<section class="hero"><p class="eyebrow">' + esc(C.ui.eyebrow) + "</p><h1>" + esc(C.appName) + "</h1>" +
      '<p class="lead">' + esc(C.ui.lead) + "</p>" +
      "<p>" + esc(C.ui.homeMethods) + "</p>" +
      "<p>" + esc(C.ui.homeBreath) + "</p></section>" +
      '<div class="tiles">' +
      '<button type="button" class="tile" data-go="checkin"><strong>' + esc(C.ui.tileCheck) + "</strong><span>" + esc(C.ui.tileCheckSub) + "</span></button>" +
      '<button type="button" class="tile" data-go="guide"><strong>' + esc(C.ui.tileGuide) + "</strong><span>" + esc(C.ui.tileGuideSub) + "</span></button>" +
      '<button type="button" class="tile" data-go="program"><strong>' + esc(C.ui.tilePlan) + "</strong><span>" + esc(C.ui.tilePlanSub) + "</span></button>" +
      '<button type="button" class="tile" data-go="breathe"><strong>' + esc(C.ui.tileBreath) + "</strong><span>" + esc(C.ui.tileBreathSub) + "</span></button></div>" +
      '<p class="muted">' + esc(C.ui.localNote) + "</p>" +
      '<button type="button" class="safety-link" data-action="safety-card">' + esc(C.ui.safetyLink) + "</button>";
  }

  function choiceButtons(kind, index, current) {
    return '<div class="choices">' + CHOICES.map(function (c) {
      var on = current === c.v ? " on" : "";
      return '<button type="button" class="choice' + on + '" data-' + kind + '="' + index + '" data-v="' + c.v + '"><strong>' + c.v + "</strong> — " + esc(c.t) + "</button>";
    }).join("") + "</div>";
  }
  function viewCheckin() {
    if (!state.check) state.check = freshCheck();
    var c = state.check;
    if (c.stage === "intro") {
      return '<section class="card"><p class="kicker">' + esc(C.ui.checkKicker) + "</p><h1>" + esc(C.ui.checkTitle) + "</h1>" +
        "<p>" + esc(C.ui.checkIntro) + "</p>" +
        "<p>" + esc(C.ui.checkScale) + "</p>" +
        '<button type="button" class="btn block" data-action="check-start">' + esc(C.ui.checkStart) + "</button></section>";
    }
    if (c.stage === "phq" || c.stage === "gad") {
      var isPhq = c.stage === "phq";
      var items = isPhq ? PHQ_ITEMS : GAD_ITEMS;
      var arr = isPhq ? c.phq : c.gad;
      var i = c.qi;
      var pct = Math.round((i / items.length) * 100);
      return '<section class="card"><p class="kicker">' + esc(isPhq ? C.ui.moodQ : C.ui.anxQ) + "</p>" +
        "<p>" + esc(fill(C.ui.qProgress, { n: i + 1, total: items.length })) + "</p>" +
        '<div class="progress" aria-hidden="true"><span style="width:' + pct + '%"></span></div><h1>' + esc(items[i]) + "</h1>" +
        (isPhq && i === 8 ? '<p class="warnbox">' + esc(C.ui.item9warn) + "</p>" : "") +
        choiceButtons(isPhq ? "phq" : "gad", i, arr[i]) +
        '<div class="row" style="margin-top:10px"><button type="button" class="btn secondary" data-action="check-back">' + esc(C.ui.back) + "</button></div></section>";
    }
    if (c.stage === "areas") {
      var boxes = AREAS.map(function (a) {
        return '<label class="check"><input type="checkbox" data-area="' + a.id + '"' + (c.areas[a.id] ? " checked" : "") + ">" + esc(a.label) + "</label>";
      }).join("");
      return '<section class="card"><h1>' + esc(C.ui.areasTitle) + "</h1>" +
        "<p>" + esc(C.ui.areasBody) + "</p>" +
        boxes + '<button type="button" class="btn block" data-action="check-finish">' + esc(C.ui.showRange) + "</button>" +
        '<button type="button" class="btn secondary block" data-action="check-back">' + esc(C.ui.back) + "</button></section>";
    }
    return viewResult(state.result);
  }
  function viewResult(entry) {
    if (!entry) return '<section class="card"><p>' + esc(C.ui.noResult) + "</p></section>";
    var phqB = bandPhq(entry.phqScore);
    var gadB = bandGad(entry.gadScore);
    var len = entry.length;
    var names = areaLabels(entry.areas);
    var existing = loadProgram();
    var replace = "";
    if (existing) {
      var done = existing.days.filter(function (d) { return d.completed; }).length;
      replace = '<label class="check"><input type="checkbox" id="replace-ok">' + esc(fill(C.ui.replacePlan, { done: done })) + '</label><p id="plan-err" class="err"></p>';
    }
    return '<section class="card"><p class="kicker">' + esc(C.ui.checkKicker) + "</p><h1>" + esc(C.ui.resultTitle) + "</h1>" +
      '<div class="score-grid"><div class="score"><span>' + esc(C.ui.moodScore) + "</span><b>" + entry.phqScore + "</b><span>" + esc(fill(C.ui.of27, { name: phqB.name })) + "</span></div>" +
      '<div class="score"><span>' + esc(C.ui.anxScore) + "</span><b>" + entry.gadScore + "</b><span>" + esc(fill(C.ui.of21, { name: gadB.name })) + "</span></div></div>" +
      "<p>" + esc(phqB.plain) + "</p><p>" + esc(gadB.plain) + "</p>" +
      '<p class="warnbox">' + esc(recommendText(entry.phqScore, entry.gadScore)) + "</p>" +
      "<p>" + esc(C.ui.cutoffExplain) + "</p>" +
      "<p>" + esc(fill(C.ui.lengthExplain, { len: len })) + "</p>" +
      "<p>" + esc(names.length ? fill(C.ui.areasChosen, { names: names.join(C.ui.listSep) }) : C.ui.noAreas) + "</p>" +
      replace + '<button type="button" class="btn block" data-action="start-plan">' + esc(fill(C.ui.startPlan, { len: len })) + "</button>" +
      '<button type="button" class="btn secondary block" data-action="check-start">' + esc(C.ui.newCheck) + '</button><button type="button" class="btn secondary block" data-go="history">' + esc(C.ui.seeHistory) + "</button></section>";
  }
  function viewGuide() {
    if (state.hold) return holdHTML();
    var chipHTML = (C.chips || []).map(function (c) {
      return '<button type="button" class="chip" data-chip="' + esc(c[0]) + '">' + esc(c[1]) + "</button>";
    }).join("");
    return '<section class="card"><h1>' + esc(C.ui.guideTitle) + '</h1><p class="banner">' + esc(C.guideNote) + "</p>" +
      "<p>" + esc(C.ui.guideIntro) + "</p>" +
      '<div class="chips">' + chipHTML + "</div>" +
      '<label class="field">' + esc(C.ui.guideLabel) + '<textarea id="guide-text">' + esc(state.guideText) + "</textarea></label>" +
      '<button type="button" class="btn block" data-action="guide-run">' + esc(C.ui.guideRun) + "</button></section>" + guideResultHTML();
  }
  function pstFields() {
    return (C.pstSpec || []).map(function (f) {
      return '<label class="field">' + esc(f[1]) + '<textarea data-pst="' + f[0] + '">' + esc(state.pst[f[0]] || "") + "</textarea></label>";
    }).join("");
  }
  function guideResultHTML() {
    var g = state.guide;
    if (!g) return "";
    if (g.type === "empty") return '<section class="card"><p>' + esc(C.ui.guideEmpty) + "</p></section>";
    var notes = "";
    if (g.diag) notes += '<p class="warnbox">' + esc(C.diagNote) + "</p>";
    if (g.meds) notes += '<p class="warnbox">' + esc(C.medNote) + "</p>";
    if (g.type === "meds-only") {
      return '<section class="card"><h2>' + esc(C.ui.medsTitle) + "</h2>" + notes +
        "<p>" + esc(C.ui.medsBody) + "</p>" +
        '<button type="button" class="btn" data-go="checkin">' + esc(C.ui.toCheck) + "</button></section>";
    }
    if (g.type === "pst") {
      var steps = (C.pstSteps || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");
      return '<section class="card answer">' + notes + '<p class="kicker">' + esc(C.ui.pstKicker) + "</p><h2>" + esc(C.ui.pstTitle) + "</h2>" +
        "<p>" + esc(C.ui.pstIntro) + "</p>" +
        "<h3>" + esc(C.ui.stepsH) + "</h3><ol>" + steps + "</ol>" +
        "<h3>" + esc(C.ui.exerciseH) + "</h3><p>" + esc(C.ui.pstExercise) + "</p>" +
        pstFields() + '<button type="button" class="btn secondary" data-go="checkin">' + esc(C.ui.toCheck) + "</button></section>";
    }
    var topic = g.topic;
    var alt = g.alt ? '<p class="muted">' + esc(fill(C.ui.altTopic, { title: g.alt.title })) + "</p>" : "";
    var breathBtn = topic.toBreath ? '<button type="button" class="btn olive" data-go="breathe">' + esc(C.ui.openBreath) + "</button>" : "";
    return '<section class="card answer">' + notes + '<p class="kicker">' + esc(topic.method) + "</p><h2>" + esc(topic.title) + "</h2>" +
      "<h3>" + esc(C.ui.whatH) + "</h3><p>" + esc(topic.what) + "</p><h3>" + esc(C.ui.stepsNow) + "</h3><ol>" +
      topic.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
      "<h3>" + esc(C.ui.exerciseH) + "</h3><p><strong>" + esc(topic.exerciseTitle) + "</strong></p><p>" + esc(topic.exercise) + "</p>" + alt +
      '<label class="field">' + esc(topic.pad) + '<textarea data-pad="1">' + esc(state.pad || "") + "</textarea></label>" +
      '<div class="row">' + breathBtn + "</div></section>";
  }

  function viewProgram() {
    if (state.hold) return holdHTML();
    var program = loadProgram();
    if (!program) {
      return '<section class="card"><h1>' + esc(C.ui.noPlan) + "</h1>" +
        "<p>" + esc(C.ui.noPlanBody) + "</p>" +
        '<button type="button" class="btn" data-go="checkin">' + esc(C.ui.toCheck) + "</button></section>";
    }
    var today = jerusalemToday();
    var idx = todayIndex(program, today);
    var done = program.days.filter(function (d) { return d.completed; }).length;
    var pct = Math.round((done / program.days.length) * 100);
    var todayDay = program.days[idx];
    var list = program.days.map(function (d, i) {
      var unlocked = i <= idx;
      var cls = "day" + (d.completed ? " done" : "") + (unlocked ? "" : " locked");
      var status = d.completed ? C.ui.stDone : (unlocked ? (i === idx ? C.ui.stToday : C.ui.stOpen) : C.ui.stLocked);
      var title = fill(C.ui.dayTitle, { n: i + 1, title: d.title });
      if (!unlocked) return '<div class="' + cls + '"><strong>' + esc(title) + '</strong><div class="meta">' + esc(status) + "</div></div>";
      return '<button type="button" class="' + cls + '" data-go="day" data-day="' + esc(d.id) + '"><strong>' + esc(title) + '</strong><div class="meta"><span class="tag">' + esc(d.method) + "</span> " + esc(status) + "</div></button>";
    }).join("");
    return '<section class="card"><h1>' + esc(C.ui.yourPlan) + "</h1><p>" + esc(fill(C.ui.planProgress, { done: done, total: program.days.length, start: program.startDate })) + "</p>" +
      '<div class="progress"><span style="width:' + pct + '%"></span></div>' +
      '<div class="card" style="box-shadow:none"><p class="kicker">' + esc(fill(C.ui.todayKicker, { n: idx + 1 })) + "</p><h2>" + esc(todayDay.title) + "</h2>" +
      "<p>" + esc(todayDay.method) + (todayDay.completed ? " · " + esc(C.ui.stDone) : "") + "</p>" +
      '<button type="button" class="btn" data-go="day" data-day="' + esc(todayDay.id) + '">' + esc(C.ui.openToday) + "</button></div></section><h2>" + esc(C.ui.allDays) + "</h2>" + list;
  }
  function viewDay() {
    if (state.hold) return holdHTML();
    var program = loadProgram();
    if (!program) return viewProgram();
    var day = null, index = -1;
    for (var i = 0; i < program.days.length; i++) if (program.days[i].id === state.dayId) { day = program.days[i]; index = i; }
    if (!day) return '<section class="card"><p>' + esc(C.ui.missingDay) + '</p><button class="btn" type="button" data-go="program">' + esc(C.ui.backPlan) + "</button></section>";
    var idx = todayIndex(program, jerusalemToday());
    if (index > idx) return '<section class="card"><h1>' + esc(day.title) + "</h1><p>" + esc(C.ui.lockedBody) + '</p><button type="button" class="btn" data-go="program">' + esc(C.ui.backPlan) + "</button></section>";
    var err = state.formError ? '<p class="err">' + esc(state.formError) + "</p>" : "";
    var doneNote = day.completed ? '<p class="okbox">' + esc(C.ui.daySaved) + "</p>" : "";
    return '<section class="card"><p class="kicker">' + esc(fill(C.ui.dayKicker, { n: index + 1, total: program.days.length, method: day.method })) + "</p><h1>" + esc(day.title) + "</h1><p>" + esc(day.lesson) + "</p><h2>" + esc(C.ui.exerciseH) + "</h2>" +
      exerciseHTML(day) + err + doneNote +
      '<label class="check complete-check"><input type="checkbox" data-action="complete-day" data-day="' + esc(day.id) + '"' + (day.completed ? " checked" : "") + ">" + esc(day.completed ? C.ui.doneCheck : C.ui.markDone) + "</label>" +
      '<div class="stack">' +
      (day.completed ? '<button type="button" class="btn secondary block" data-action="uncomplete-day" data-day="' + esc(day.id) + '">' + esc(C.ui.undoDone) + "</button>" : "") +
      '<button type="button" class="btn secondary block" data-go="program">' + esc(C.ui.backPlan) + "</button></div></section>";
  }
  function viewBreathe() {
    if (state.hold) return holdHTML();
    return '<section class="card"><h1>' + esc(C.ui.breathTitle) + "</h1><p>" + esc(C.ui.breathIntro) + "</p>" + breathBlock("") + "</section>";
  }
  function viewHistory() {
    var list = loadCheckins();
    var body = !list.length ? "<p>" + esc(C.ui.noHistory) + "</p>" : list.map(function (item) {
      if (item.crisis) return '<article class="history-item"><strong>' + esc(fmtWhen(item.at)) + "</strong><p>" + esc(C.ui.crisisHistory) + "</p></article>";
      var names = areaLabels(item.areas);
      return '<article class="history-item"><strong>' + esc(fmtWhen(item.at)) + "</strong><p>" + esc(fill(C.ui.histLine, { phq: item.phqScore, phqName: bandPhq(item.phqScore).name, gad: item.gadScore, gadName: bandGad(item.gadScore).name, len: item.length })) + "</p><p class=\"muted\">" + esc(bandPhq(item.phqScore).plain) + " " + esc(bandGad(item.gadScore).plain) + "</p>" + (names.length ? "<p>" + esc(fill(C.ui.areasChosen, { names: names.join(C.ui.listSep) })) + "</p>" : "") + "</article>";
    }).join("");
    var clearBtn = state.confirmClear
      ? '<button type="button" class="btn block" data-action="clear-yes">' + esc(C.ui.clearYes) + '</button><button type="button" class="btn secondary block" data-action="clear-no">' + esc(C.ui.clearNo) + "</button>"
      : '<button type="button" class="btn secondary block" data-action="clear-ask">' + esc(C.ui.clearAsk) + "</button>";
    return '<section class="card"><h1>' + esc(C.ui.histTitle) + '</h1><p class="muted">' + esc(C.ui.histNote) + "</p>" + body + clearBtn + "</section>";
  }
  function viewHTML() {
    switch (state.view) {
      case "checkin": return viewCheckin();
      case "guide": return viewGuide();
      case "program": return viewProgram();
      case "day": return viewDay();
      case "breathe": return viewBreathe();
      case "history": return viewHistory();
      default: return viewHome();
    }
  }
  function renderCrisis() {
    var el = document.getElementById("crisis");
    if (!el) return;
    document.body.classList.toggle("lock", !!state.crisis);
    if (!state.crisis) { el.classList.add("hidden"); el.innerHTML = ""; return; }
    el.classList.remove("hidden");
    var backLabel = state.crisis.reason === "manual" ? C.ui.crisisBack : C.ui.crisisBackHold;
    el.innerHTML = '<div class="crisis-inner"><h1 id="crisis-title" tabindex="-1">' + esc(C.ui.crisisTitle) + "</h1>" +
      "<p>" + esc(C.ui.crisisBody) + "</p>" +
      "<p>" + esc(C.ui.crisisCall) + "</p>" +
      '<a class="call" href="tel:1201"><span>' + esc(C.ui.eranLabel) + "</span><b>1201</b></a>" +
      '<a class="call" href="tel:101"><span>' + esc(C.ui.emergencyLabel) + "</span><b>101</b></a>" +
      "<p>" + esc(C.ui.goER) + "</p>" +
      "<p>" + esc(C.ui.outside) + "</p>" +
      '<p class="disclaimer">' + esc(C.disclaimer) + "</p>" +
      '<button type="button" class="btn" id="crisis-dismiss">' + esc(backLabel) + "</button></div>";
  }
  function render() {
    var breathingHere = state.view === "breathe" || (state.view === "day" && state.dayId === "t1");
    if (!breathingHere) stopBreath(false);
    var app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = shell(viewHTML());
    renderCrisis();
    if (breath.running) syncBreathDom();
  }
  function readRoute() {
    var h = (location.hash || "#home").replace("#", "");
    if (h.indexOf("day-") === 0) { state.view = "day"; state.dayId = h.slice(4); return; }
    var known = { home: 1, checkin: 1, guide: 1, program: 1, breathe: 1, history: 1 };
    state.view = known[h] ? h : "home";
  }
  function go(view, dayId) {
    var next = view === "day" ? "day-" + dayId : view;
    if ((location.hash || "").replace("#", "") === next) { readRoute(); render(); return; }
    location.hash = next;
  }

  function stopBreath(done) {
    if (breath.timer) clearInterval(breath.timer);
    breath.timer = null;
    breath.running = false;
    if (done) {
      breath.finishedMsg = C.ui.breathDone;
      if (breath.dayId) {
        var p = loadProgram();
        if (p) {
          for (var i = 0; i < p.days.length; i++) if (p.days[i].id === breath.dayId) p.days[i].answers.did = true;
          saveProgram(p);
        }
      }
    }
  }
  function syncBreathDom() {
    var orb = document.getElementById("orb");
    if (!orb) return;
    var modes = breathModes();
    var phase = modes[breath.mode].phases[breath.phaseIdx];
    var name = document.getElementById("phase-name");
    var num = document.getElementById("count-num");
    var cyc = document.getElementById("cycle-label");
    var btn = document.getElementById("breath-toggle");
    var done = document.getElementById("breath-done");
    if (name) name.textContent = breath.running ? phase.name : (breath.finishedMsg ? C.ui.ok : C.ui.ready);
    if (num) num.textContent = breath.running ? String(breath.left) : "·";
    if (cyc) cyc.textContent = breath.running ? fill(C.ui.cycleLabel, { n: breath.cycle + 1, total: breath.totalCycles }) : "";
    var scale = phase.dir === "in" ? 1 : phase.dir === "out" ? 0.68 : Number(orb.dataset.scale || 0.68);
    if (phase.dir !== "hold") orb.dataset.scale = String(scale);
    orb.style.transitionDuration = (breath.running ? phase.sec : 0.4) + "s";
    orb.style.transform = "scale(" + (breath.running ? (phase.dir === "hold" ? orb.dataset.scale : scale) : 0.72) + ")";
    if (btn) btn.textContent = breath.running ? C.ui.stop : C.ui.start;
    if (done) { done.textContent = breath.finishedMsg || ""; done.classList.toggle("hidden", !breath.finishedMsg); }
  }
  function startBreath(dayId) {
    breath.dayId = dayId || null;
    breath.finishedMsg = "";
    breath.phaseIdx = 0;
    breath.cycle = 0;
    breath.left = breathModes()[breath.mode].phases[0].sec;
    breath.running = true;
    if (breath.timer) clearInterval(breath.timer);
    syncBreathDom();
    breath.timer = setInterval(function () {
      breath.left -= 1;
      if (breath.left <= 0) {
        var phases = breathModes()[breath.mode].phases;
        breath.phaseIdx += 1;
        if (breath.phaseIdx >= phases.length) {
          breath.phaseIdx = 0;
          breath.cycle += 1;
          if (breath.cycle >= breath.totalCycles) { stopBreath(true); syncBreathDom(); return; }
        }
        breath.left = phases[breath.phaseIdx].sec;
      }
      syncBreathDom();
    }, 1000);
  }
  function onGuideRun() {
    var text = state.guideText || "";
    var box = document.getElementById("guide-text");
    if (box) text = box.value;
    if (isCrisisText(text)) {
      state.guide = null;
      state.guideText = "";
      triggerCrisis("text");
      return;
    }
    state.guideText = text;
    var res = respond(text);
    state.guide = res;
    if (res.type === "topic") {
      var saved = loadJSON(K_PAD, null);
      state.pad = saved && saved.topic === res.topic.id ? (saved.text || "") : "";
    }
    render();
  }
  function finishCheckin() {
    var c = state.check;
    var phqScore = scoreSum(c.phq);
    var gadScore = scoreSum(c.gad);
    var entry = { id: String(Date.now()), at: new Date().toISOString(), phq: c.phq.slice(), gad: c.gad.slice(), phqScore: phqScore, gadScore: gadScore, areas: Object.assign({}, c.areas), length: programLength(phqScore, gadScore), crisis: false };
    saveCheckin(entry);
    state.result = entry;
    c.stage = "result";
    render();
  }
  function saveScreenCrisis() {
    var c = state.check;
    saveCheckin({ id: String(Date.now()), at: new Date().toISOString(), phqScore: null, gadScore: null, areas: {}, length: null, crisis: true });
  }
  function startPlan() {
    var entry = state.result;
    if (!entry || entry.crisis) return;
    var existing = loadProgram();
    var box = document.getElementById("replace-ok");
    if (existing && box && !box.checked) {
      var err = document.getElementById("plan-err");
      if (err) err.textContent = C.ui.replaceErr;
      return;
    }
    saveProgram(buildProgram({ phq: entry.phqScore, gad: entry.gadScore, areas: entry.areas, startDate: jerusalemToday(), checkinId: entry.id }));
    go("program");
  }
  function completeDay(id) {
    var p = loadProgram();
    if (!p) return;
    var day = null, index = -1;
    for (var i = 0; i < p.days.length; i++) if (p.days[i].id === id) { day = p.days[i]; index = i; }
    if (!day) return;
    if (index > todayIndex(p, jerusalemToday())) return;
    if (!hasContent(day)) { state.formError = C.ui.needContent; render(); return; }
    day.completed = true;
    day.completedAt = new Date().toISOString();
    saveProgram(p);
    state.formError = "";
    render();
  }
  function onClick(e) {
    var t = e.target.closest("[data-go],[data-action],[data-chip],[data-phq],[data-gad]");
    if (!t) return;
    if (t.dataset.go) { state.formError = ""; go(t.dataset.go, t.dataset.day); return; }
    if (t.dataset.chip) { state.guideText = t.dataset.chip; var area = document.getElementById("guide-text"); if (area) area.value = state.guideText; onGuideRun(); return; }
    if (t.dataset.phq != null) {
      var i = Number(t.dataset.phq), v = Number(t.dataset.v);
      state.check.phq[i] = v;
      if (i === 8 && isSelfHarmScore(v)) { saveScreenCrisis(); state.guideText = ""; triggerCrisis("screen"); return; }
      if (i < PHQ_ITEMS.length - 1) state.check.qi = i + 1;
      else { state.check.stage = "gad"; state.check.qi = 0; }
      render(); return;
    }
    if (t.dataset.gad != null) {
      var gi = Number(t.dataset.gad);
      state.check.gad[gi] = Number(t.dataset.v);
      if (gi < GAD_ITEMS.length - 1) state.check.qi = gi + 1;
      else state.check.stage = "areas";
      render(); return;
    }
    var action = t.dataset.action;
    if (action === "safety-card") { triggerCrisis("manual"); return; }
    if (action === "clear-hold") { setHold(false); render(); return; }
    if (action === "check-start") { state.check = freshCheck(); state.check.stage = "phq"; state.check.qi = 0; state.result = null; render(); return; }
    if (action === "check-back") {
      var c = state.check;
      if (c.stage === "gad" && c.qi === 0) { c.stage = "phq"; c.qi = PHQ_ITEMS.length - 1; }
      else if (c.stage === "areas") { c.stage = "gad"; c.qi = GAD_ITEMS.length - 1; }
      else if (c.stage === "phq" && c.qi === 0) c.stage = "intro";
      else c.qi -= 1;
      render(); return;
    }
    if (action === "check-finish") { finishCheckin(); return; }
    if (action === "start-plan") { startPlan(); return; }
    if (action === "guide-run") { onGuideRun(); return; }
    if (action === "complete-day") {
      if (t.checked === false) {
        var prog0 = loadProgram();
        if (prog0) { for (var n0 = 0; n0 < prog0.days.length; n0++) if (prog0.days[n0].id === t.dataset.day) { prog0.days[n0].completed = false; prog0.days[n0].completedAt = null; } saveProgram(prog0); }
        state.formError = "";
        render();
        return;
      }
      completeDay(t.dataset.day);
      return;
    }
    if (action === "uncomplete-day") {
      var prog = loadProgram();
      if (prog) { for (var n = 0; n < prog.days.length; n++) if (prog.days[n].id === t.dataset.day) { prog.days[n].completed = false; prog.days[n].completedAt = null; } saveProgram(prog); }
      render(); return;
    }
    if (action === "breath-mode") { stopBreath(false); breath.mode = t.dataset.mode; breath.finishedMsg = ""; render(); return; }
    if (action === "breath-toggle") {
      if (breath.running) { stopBreath(false); breath.finishedMsg = ""; syncBreathDom(); }
      else {
        var sel = document.getElementById("breath-cycles");
        if (sel) breath.totalCycles = Number(sel.value) || 5;
        var wrap = t.closest("[data-breath-day]");
        startBreath(wrap ? wrap.getAttribute("data-breath-day") : "");
      }
      return;
    }
    if (action === "clear-ask") { state.confirmClear = true; render(); return; }
    if (action === "clear-no") { state.confirmClear = false; render(); return; }
    if (action === "clear-yes") {
      try { localStorage.removeItem(K_CHECKINS); localStorage.removeItem(K_PROGRAM); localStorage.removeItem(K_PST); localStorage.removeItem(K_PAD); } catch (err) {}
      state.confirmClear = false; state.result = null; state.pst = {}; state.pad = ""; render();
    }
  }
  function onInput(e) {
    var el = e.target;
    if (!el) return;
    if (el.id === "guide-text") { state.guideText = el.value; return; }
    if (el.id === "breath-cycles") { breath.totalCycles = Number(el.value) || 5; return; }
    if (el.dataset && el.dataset.area) { if (!state.check) state.check = freshCheck(); state.check.areas[el.dataset.area] = !!el.checked; return; }
    if (el.dataset && el.dataset.key && el.dataset.day) {
      var p = loadProgram();
      if (!p) return;
      for (var i = 0; i < p.days.length; i++) if (p.days[i].id === el.dataset.day) p.days[i].answers[el.dataset.key] = el.type === "checkbox" ? !!el.checked : el.value;
      saveProgram(p); return;
    }
    if (el.dataset && el.dataset.pst) { state.pst[el.dataset.pst] = el.value; saveJSON(K_PST, state.pst); return; }
    if (el.dataset && el.dataset.pad != null) {
      state.pad = el.value;
      var topicId = state.guide && state.guide.topic ? state.guide.topic.id : "";
      saveJSON(K_PAD, { topic: topicId, text: state.pad });
    }
  }
  function init() {
    try { state.hold = sessionStorage.getItem(K_HOLD) === "1"; } catch (e) {}
    var pending = null;
    try { pending = localStorage.getItem(K_PENDING); } catch (e2) {}
    if (pending === "text" || pending === "screen") state.crisis = { reason: pending };
    state.pst = loadJSON(K_PST, {}) || {};
    var pad = loadJSON(K_PAD, null);
    if (pad && pad.text) state.pad = pad.text;
    readRoute();
    var app = document.getElementById("app");
    app.addEventListener("click", onClick);
    app.addEventListener("input", onInput);
    app.addEventListener("change", onInput);
    document.getElementById("crisis").addEventListener("click", function (ev) {
      if (ev.target && ev.target.id === "crisis-dismiss") dismissCrisis();
    });
    window.addEventListener("hashchange", function () { readRoute(); render(); });
    render();
    if (state.crisis) { var h = document.getElementById("crisis-title"); if (h) h.focus(); }
  }
  if (typeof document !== "undefined") init();

  var api = {
    DISCLAIMER: C.disclaimer,
    MED_NOTE: C.medNote,
    DIAG_NOTE: C.diagNote,
    GUIDE_NOTE: C.guideNote,
    isCrisisText: isCrisisText,
    isSelfHarmScore: isSelfHarmScore,
    isMedicationAsk: isMedicationAsk,
    isDiagnosisAsk: isDiagnosisAsk,
    respond: respond,
    scoreSum: scoreSum,
    bandPhq: bandPhq,
    bandGad: bandGad,
    programLength: programLength,
    buildProgram: buildProgram,
    selectDayIds: selectDayIds,
    todayIndex: todayIndex,
    PHQ_ITEMS: PHQ_ITEMS,
    GAD_ITEMS: GAD_ITEMS,
    TOPICS: TOPICS,
    TEMPLATES: TEMPLATES,
    norm: norm,
    appName: C.appName
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;

})();
