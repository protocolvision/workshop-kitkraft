/* strings.js — interface strings, keyed by language. Loaded with a plain script
 * tag like data.js, because a page on file:// cannot fetch anything.
 *
 * Interface strings only: headline, headings, buttons, field labels, the four
 * questions, the delta line, the disclosure label. Listing text, employer
 * names, credential procedures and gap content stay in their original
 * language, because those are real German-language sources and translating
 * them here would be inventing a translation nobody checked.
 *
 * Languages are offered as autonyms — the language written in itself — and
 * never as flags. Flags are countries rather than languages: German would need
 * three of them, and showing somebody the wrong flag is a poor way to open.
 */
window.STRINGS = {

  /* Order here is the order in the selector. */
  languages: [
    { code: 'de', autonym: 'Deutsch',    english: 'German',    dir: 'ltr', flag: '\uD83C\uDDE9\uD83C\uDDEA' },
    { code: 'en', autonym: 'English',    english: 'English',   dir: 'ltr', flag: '\uD83C\uDDEC\uD83C\uDDE7' },
    { code: 'uk', autonym: 'Українська', english: 'Ukrainian', dir: 'ltr', flag: '\uD83C\uDDFA\uD83C\uDDE6' },
    { code: 'tr', autonym: 'Türkçe',     english: 'Turkish',   dir: 'ltr', flag: '\uD83C\uDDF9\uD83C\uDDF7' },
    { code: 'ar', autonym: 'العربية',     english: 'Arabic',    dir: 'rtl', flag: '\uD83C\uDF10' },
    { code: 'es', autonym: 'Español',    english: 'Spanish',   dir: 'ltr', flag: '\uD83C\uDDEA\uD83C\uDDF8' }
  ],

  /* One switch, so the flag question can be seen rather than argued.
     Default off. A flag is a country, not a language: German would need three,
     Spanish twenty-odd, and Arabic more than twenty — which is why the entry
     above carries a globe rather than a country. Showing a Russian flag to a
     Ukrainian speaker, or a Saudi flag to a Syrian one, is the worst possible
     first impression for this audience. Emoji only, never an image file, so
     nothing has to load even when it is switched on. */
  config: { showFlags: false },

  fallback: 'en',

  t: {
    en: {
      greeting: 'Welcome',
      resultsNotice: 'Invented listings at invented employers. Nothing here is a real opening.',
      optional: '(optional)',
      changeLanguage: 'Change language',
      headline: 'Find roles that match your qualifications, not only your German.',
      lede: 'Import a profile and see which roles it already reaches, what stands between you and the rest, and who to approach.',
      signin: 'Continue with LinkedIn',
      chooserTitle: 'Choose a demo account',
      years: 'years',
      switchAccount: 'Switch',
      questionsTitle: 'A few questions',
      questionsLede: 'Prefilled from the profile. Change anything and the results follow.',
      city: 'City', germanLevel: 'German level', sector: 'Target sector', otherLanguages: 'Other languages',
      findRoles: 'Find roles',
      colRole: 'Role', colEmployer: 'Employer', colCity: 'City', colGerman: 'German', colFit: 'Fit',
      fitStrong: 'strong', fitGood: 'good', fitPossible: 'possible',
      tellMoreTitle: 'Tell us more',
      tellMoreLede: 'Every answer changes the list above. Skip anything you would rather not say.',
      yes: 'Yes', no: 'No', skip: 'Skip',
      noteLabel: 'Anything else worth knowing?',
      addNote: 'Add', removeNote: 'Remove',
      noteNoMatch: 'recorded, changed nothing',
      missingTitle: "What you're missing",
      missingLede: 'Requirements are set by the competent authority and vary by Bundesland — check your own case, free of charge, at',
      outreachTitle: 'Who to approach',
      outreachLede: 'Roles and kinds of organisation, not contacts.',
      outreachRoles: 'Roles at the employers on your list',
      outreachOrgs: 'Organisations worth contacting',
      showAll: 'Show all',
      working: 'How this was worked out',
      spyRoles: 'Roles', spyMissing: 'Missing', spyOutreach: 'Who to approach',
      deltaRole: 'role', deltaRoles: 'roles',
      deltaRequirement: 'requirement met', deltaRequirements: 'requirements met',
      deltaNothing: 'Nothing changed',
      questions: {
        shift_work: 'Can you work shifts, including nights?',
        mobility: 'Would you move to another city for the right role?',
        licence: 'Do you hold a driving licence?',
        fixed_term: 'Are you open to a fixed-term contract to start?'
      }
    },

    de: {
      greeting: 'Willkommen',
      resultsNotice: 'Erfundene Stellenanzeigen bei erfundenen Arbeitgebern. Nichts davon ist eine echte Stelle.',
      optional: '(optional)',
      changeLanguage: 'Sprache ändern',
      headline: 'Finden Sie Stellen, die zu Ihrer Qualifikation passen – nicht nur zu Ihrem Deutsch.',
      lede: 'Profil importieren und sehen, welche Stellen schon erreichbar sind, was noch fehlt und wen Sie ansprechen können.',
      signin: 'Weiter mit LinkedIn',
      chooserTitle: 'Demo-Konto auswählen',
      years: 'Jahre',
      switchAccount: 'Wechseln',
      questionsTitle: 'Ein paar Fragen',
      questionsLede: 'Aus dem Profil vorausgefüllt. Ändern Sie etwas, und die Ergebnisse folgen.',
      city: 'Stadt', germanLevel: 'Deutschniveau', sector: 'Zielbranche', otherLanguages: 'Weitere Sprachen',
      findRoles: 'Stellen finden',
      colRole: 'Stelle', colEmployer: 'Arbeitgeber', colCity: 'Stadt', colGerman: 'Deutsch', colFit: 'Passung',
      fitStrong: 'stark', fitGood: 'gut', fitPossible: 'möglich',
      tellMoreTitle: 'Mehr über Sie',
      tellMoreLede: 'Jede Antwort verändert die Liste oben. Überspringen Sie, was Sie nicht sagen möchten.',
      yes: 'Ja', no: 'Nein', skip: 'Überspringen',
      noteLabel: 'Gibt es noch etwas, das wir wissen sollten?',
      addNote: 'Hinzufügen', removeNote: 'Entfernen',
      noteNoMatch: 'erfasst, hat nichts verändert',
      missingTitle: 'Was Ihnen noch fehlt',
      missingLede: 'Was verlangt wird, legt die zuständige Stelle fest und ist von Land zu Land verschieden — prüfen Sie Ihren Fall kostenlos bei',
      outreachTitle: 'Wen Sie ansprechen können',
      outreachLede: 'Funktionen und Arten von Organisationen, keine Kontaktdaten.',
      outreachRoles: 'Funktionen bei den Arbeitgebern auf Ihrer Liste',
      outreachOrgs: 'Organisationen, bei denen sich eine Anfrage lohnt',
      showAll: 'Alle anzeigen',
      working: 'Wie das berechnet wurde',
      spyRoles: 'Stellen', spyMissing: 'Was fehlt', spyOutreach: 'Ansprechpartner',
      deltaRole: 'Stelle', deltaRoles: 'Stellen',
      deltaRequirement: 'Anforderung erfüllt', deltaRequirements: 'Anforderungen erfüllt',
      deltaNothing: 'Nichts verändert',
      questions: {
        shift_work: 'Können Sie im Schichtdienst arbeiten, auch nachts?',
        mobility: 'Würden Sie für die richtige Stelle in eine andere Stadt ziehen?',
        licence: 'Haben Sie einen Führerschein?',
        fixed_term: 'Wären Sie für den Anfang zu einem befristeten Vertrag bereit?'
      }
    },

    uk: {
      greeting: 'Ласкаво просимо',
      resultsNotice: 'Вигадані вакансії у вигаданих роботодавців. Жодна з них не є справжньою.',
      optional: '(необов’язково)',
      changeLanguage: 'Змінити мову',
      headline: 'Знайдіть посади, які відповідають вашій кваліфікації, а не лише вашій німецькій.',
      lede: 'Імпортуйте профіль і подивіться, які посади вже доступні, чого бракує та до кого звернутися.',
      signin: 'Продовжити з LinkedIn',
      chooserTitle: 'Оберіть демонстраційний обліковий запис',
      years: 'років досвіду',
      switchAccount: 'Змінити',
      questionsTitle: 'Кілька запитань',
      questionsLede: 'Заповнено з профілю. Змініть будь-що — і результати зміняться.',
      city: 'Місто', germanLevel: 'Рівень німецької', sector: 'Галузь', otherLanguages: 'Інші мови',
      findRoles: 'Знайти посади',
      colRole: 'Посада', colEmployer: 'Роботодавець', colCity: 'Місто', colGerman: 'Німецька', colFit: 'Відповідність',
      fitStrong: 'висока', fitGood: 'добра', fitPossible: 'можлива',
      tellMoreTitle: 'Розкажіть більше',
      tellMoreLede: 'Кожна відповідь змінює список вище. Пропустіть те, про що не хочете казати.',
      yes: 'Так', no: 'Ні', skip: 'Пропустити',
      noteLabel: 'Що ще варто знати?',
      addNote: 'Додати', removeNote: 'Прибрати',
      noteNoMatch: 'записано, нічого не змінило',
      missingTitle: 'Чого бракує',
      missingLede: 'Вимоги встановлює компетентний орган, і вони різні в кожній федеральній землі — перевірте свій випадок безкоштовно на',
      outreachTitle: 'До кого звернутися',
      outreachLede: 'Посади та типи організацій, а не контакти.',
      outreachRoles: 'Посади в роботодавців із вашого списку',
      outreachOrgs: 'Організації, до яких варто звернутися',
      showAll: 'Показати всі',
      working: 'Як це було обчислено',
      spyRoles: 'Посади', spyMissing: 'Чого бракує', spyOutreach: 'До кого звернутися',
      deltaRole: 'посада', deltaRoles: 'посад',
      deltaRequirement: 'вимогу виконано', deltaRequirements: 'вимог виконано',
      deltaNothing: 'Нічого не змінилося',
      questions: {
        shift_work: 'Чи можете ви працювати позмінно, зокрема вночі?',
        mobility: 'Чи переїхали б ви в інше місто заради відповідної роботи?',
        licence: 'Чи маєте ви водійське посвідчення?',
        fixed_term: 'Чи розглядаєте ви строковий договір на початок?'
      }
    },

    tr: {
      greeting: 'Hoş geldiniz',
      resultsNotice: 'Uydurma işverenlerde uydurma ilanlar. Buradaki hiçbir ilan gerçek değil.',
      optional: '(isteğe bağlı)',
      changeLanguage: 'Dili değiştir',
      headline: 'Yalnızca Almancanıza değil, niteliklerinize uyan işleri bulun.',
      lede: 'Bir profil içe aktarın; hangi pozisyonlara şimdiden ulaştığınızı, geriye ne kaldığını ve kime başvuracağınızı görün.',
      signin: 'LinkedIn ile devam et',
      chooserTitle: 'Bir demo hesabı seçin',
      years: 'yıl',
      switchAccount: 'Değiştir',
      questionsTitle: 'Birkaç soru',
      questionsLede: 'Profilden dolduruldu. Değiştirin, sonuçlar da değişsin.',
      city: 'Şehir', germanLevel: 'Almanca seviyesi', sector: 'Hedef sektör', otherLanguages: 'Diğer diller',
      findRoles: 'Pozisyonları bul',
      colRole: 'Pozisyon', colEmployer: 'İşveren', colCity: 'Şehir', colGerman: 'Almanca', colFit: 'Uygunluk',
      fitStrong: 'güçlü', fitGood: 'iyi', fitPossible: 'olası',
      tellMoreTitle: 'Bize biraz daha anlatın',
      tellMoreLede: 'Her yanıt yukarıdaki listeyi değiştirir. Söylemek istemediklerinizi atlayın.',
      yes: 'Evet', no: 'Hayır', skip: 'Atla',
      noteLabel: 'Bilmemiz gereken başka bir şey var mı?',
      addNote: 'Ekle', removeNote: 'Kaldır',
      noteNoMatch: 'kaydedildi, bir şey değiştirmedi',
      missingTitle: 'Eksikleriniz',
      missingLede: 'Koşulları yetkili makam belirler ve eyaletten eyalete değişir — kendi durumunuzu ücretsiz olarak şu adresten öğrenin:',
      outreachTitle: 'Kime başvurmalı',
      outreachLede: 'Kişiler değil, pozisyonlar ve kurum türleri.',
      outreachRoles: 'Listenizdeki işverenlerdeki pozisyonlar',
      outreachOrgs: 'Başvurmaya değer kurumlar',
      showAll: 'Tümünü göster',
      working: 'Bu nasıl hesaplandı',
      spyRoles: 'Pozisyonlar', spyMissing: 'Eksikler', spyOutreach: 'Kime başvurmalı',
      deltaRole: 'pozisyon', deltaRoles: 'pozisyon',
      deltaRequirement: 'koşul karşılandı', deltaRequirements: 'koşul karşılandı',
      deltaNothing: 'Hiçbir şey değişmedi',
      questions: {
        shift_work: 'Geceler dahil vardiyalı çalışabilir misiniz?',
        mobility: 'Doğru iş için başka bir şehre taşınır mıydınız?',
        licence: 'Sürücü belgeniz var mı?',
        fixed_term: 'Başlangıç için belirli süreli sözleşmeye açık mısınız?'
      }
    },

    ar: {
      greeting: 'أهلاً وسهلاً',
      resultsNotice: 'إعلانات وظائف مُختلقة لدى جهات عمل مُختلقة. لا توجد هنا وظيفة حقيقية.',
      optional: '(اختياري)',
      changeLanguage: 'تغيير اللغة',
      headline: 'اعثر على وظائف تناسب مؤهلاتك، لا لغتك الألمانية وحدها.',
      lede: 'استورد ملفًا شخصيًا وانظر أي الوظائف في متناولك الآن، وما الذي ينقصك، وبمن تتصل.',
      signin: 'المتابعة عبر LinkedIn',
      chooserTitle: 'اختر حسابًا تجريبيًا',
      years: 'سنوات خبرة',
      switchAccount: 'تبديل',
      questionsTitle: 'بضعة أسئلة',
      questionsLede: 'مملوءة من الملف الشخصي. غيّر ما تشاء وستتغير النتائج.',
      city: 'المدينة', germanLevel: 'مستوى الألمانية', sector: 'القطاع المستهدف', otherLanguages: 'لغات أخرى',
      findRoles: 'ابحث عن وظائف',
      colRole: 'الوظيفة', colEmployer: 'جهة العمل', colCity: 'المدينة', colGerman: 'الألمانية', colFit: 'مدى الملاءمة',
      fitStrong: 'قوية', fitGood: 'جيدة', fitPossible: 'ممكنة',
      tellMoreTitle: 'أخبرنا المزيد',
      tellMoreLede: 'كل إجابة تغيّر القائمة أعلاه. تخطَّ ما لا ترغب في ذكره.',
      yes: 'نعم', no: 'لا', skip: 'تخطي',
      noteLabel: 'هل من شيء آخر يجدر بنا معرفته؟',
      addNote: 'إضافة', removeNote: 'إزالة',
      noteNoMatch: 'سُجّل، ولم يغيّر شيئًا',
      missingTitle: 'ما الذي ينقصك',
      missingLede: 'الجهة المختصة هي من تحدد المتطلبات، وهي تختلف من ولاية إلى أخرى — تحقق من حالتك مجانًا عبر',
      outreachTitle: 'بمن تتصل',
      outreachLede: 'مناصب وأنواع جهات، لا بيانات اتصال.',
      outreachRoles: 'المناصب لدى جهات العمل في قائمتك',
      outreachOrgs: 'جهات يستحق التواصل معها',
      showAll: 'عرض الكل',
      working: 'كيف جرى حساب ذلك',
      spyRoles: 'الوظائف', spyMissing: 'ما ينقصك', spyOutreach: 'بمن تتصل',
      deltaRole: 'وظيفة', deltaRoles: 'وظائف',
      deltaRequirement: 'شرط مستوفى', deltaRequirements: 'شروط مستوفاة',
      deltaNothing: 'لم يتغير شيء',
      questions: {
        shift_work: 'هل يمكنك العمل بنظام المناوبات، بما في ذلك الليل؟',
        mobility: 'هل تنتقل إلى مدينة أخرى من أجل الوظيفة المناسبة؟',
        licence: 'هل لديك رخصة قيادة؟',
        fixed_term: 'هل تقبل عقدًا محدد المدة في البداية؟'
      }
    },

    es: {
      greeting: 'Te damos la bienvenida',
      resultsNotice: 'Ofertas inventadas en empleadores inventados. Ninguna de ellas es una vacante real.',
      optional: '(opcional)',
      changeLanguage: 'Cambiar idioma',
      headline: 'Encuentra puestos que coincidan con tu cualificación, no solo con tu alemán.',
      lede: 'Importa un perfil y mira a qué puestos ya llegas, qué te falta y a quién dirigirte.',
      signin: 'Continuar con LinkedIn',
      chooserTitle: 'Elige una cuenta de demostración',
      years: 'años',
      switchAccount: 'Cambiar',
      questionsTitle: 'Unas preguntas',
      questionsLede: 'Rellenado desde el perfil. Cambia lo que quieras y los resultados te siguen.',
      city: 'Ciudad', germanLevel: 'Nivel de alemán', sector: 'Sector objetivo', otherLanguages: 'Otros idiomas',
      findRoles: 'Buscar puestos',
      colRole: 'Puesto', colEmployer: 'Empleador', colCity: 'Ciudad', colGerman: 'Alemán', colFit: 'Encaje',
      fitStrong: 'alto', fitGood: 'bueno', fitPossible: 'posible',
      tellMoreTitle: 'Cuéntanos más',
      tellMoreLede: 'Cada respuesta cambia la lista de arriba. Omite lo que prefieras no decir.',
      yes: 'Sí', no: 'No', skip: 'Omitir',
      noteLabel: '¿Algo más que debamos saber?',
      addNote: 'Añadir', removeNote: 'Quitar',
      noteNoMatch: 'registrado, no cambió nada',
      missingTitle: 'Lo que te falta',
      missingLede: 'Los requisitos los fija la autoridad competente y varían según el Land — consulta tu caso, gratis, en',
      outreachTitle: 'A quién dirigirte',
      outreachLede: 'Puestos y tipos de organización, no contactos.',
      outreachRoles: 'Puestos en los empleadores de tu lista',
      outreachOrgs: 'Organizaciones que vale la pena contactar',
      showAll: 'Mostrar todo',
      working: 'Cómo se calculó esto',
      spyRoles: 'Puestos', spyMissing: 'Lo que falta', spyOutreach: 'A quién dirigirte',
      deltaRole: 'puesto', deltaRoles: 'puestos',
      deltaRequirement: 'requisito cumplido', deltaRequirements: 'requisitos cumplidos',
      deltaNothing: 'No cambió nada',
      questions: {
        shift_work: '¿Puedes trabajar por turnos, incluidas las noches?',
        mobility: '¿Te mudarías a otra ciudad por el puesto adecuado?',
        licence: '¿Tienes permiso de conducir?',
        fixed_term: '¿Aceptarías un contrato temporal para empezar?'
      }
    }
  }
};
