const SITE_LINKS = Object.freeze({
  booksy: "https://booksy.com/pl-pl/358793-elenia-massage-gdansk",
  instagram: "",
  facebook: ""
});

const TRANSLATIONS = {
  ru: {
    "Przejdź do treści": "Перейти к содержанию", "Menu": "Меню", "Usługi": "Услуги", "O Alenie": "Об Алене", "Miejsce": "Место", "Kontakt": "Контакты", "Zarezerwuj": "Записаться",
    "Masaż • Gdańsk": "Массаж • Гданьск", "Dotyk, który pozwala zwolnić.": "Прикосновение, которое позволяет замедлиться.", "Indywidualnie dobrana sesja masażu w spokojnej atmosferze. Sprawdź wolne terminy i zarezerwuj online.": "Индивидуально подобранный массаж в спокойной атмосфере. Проверьте свободные часы и запишитесь онлайн.", "Zarezerwuj w Booksy": "Записаться в Booksy", "Poznaj usługi": "Посмотреть услуги",
    "Ponad 3 lata doświadczenia": "Более 3 лет опыта", "Polski • rosyjski • podstawowy angielski": "Польский • русский • базовый английский", "Gdańsk Śródmieście": "Гданьск, Срудмесьце", "Terminy online": "Онлайн-запись", "Aktualna dostępność w Booksy": "Актуальная доступность в Booksy", "Masz już wybraną usługę?": "Уже выбрали услугу?", "Sprawdź wolne terminy": "Проверить свободные часы",
    "Wybierz czas dla siebie": "Выберите время для себя", "Pełna lista, ceny i aktualne terminy są zawsze dostępne w profilu Elenia na Booksy.": "Полный список услуг, цены и актуальные часы всегда доступны в профиле Elenia на Booksy.", "Masaż relaksacyjny": "Расслабляющий массаж", "Masaż klasyczny": "Классический массаж", "Plecy i kark": "Спина и шея", "Cena i terminy w Booksy": "Цены и часы в Booksy",
    "Uważność w każdym spotkaniu": "Внимание в каждой встрече", "Najważniejsze są spokój, jasna komunikacja i poczucie, że to naprawdę Twój czas.": "Главное — спокойствие, ясное общение и ощущение, что это действительно ваше время.", "Poznaj profil w Booksy": "Открыть профиль Booksy", "Spokojny rytuał w sercu Gdańska": "Спокойный ритуал в сердце Гданьска", "Adres": "Адрес", "Dzielnica": "Район", "Śródmieście • Główne Miasto": "Срудмесьце • Главный город", "Wizyty": "Приём", "Po rezerwacji": "По записи", "Wyznacz trasę": "Построить маршрут",
    "Rezerwacja": "Запись", "Znajdź dogodny termin": "Найдите удобное время", "Zdjęcia, aktualności i kontakt": "Фотографии, новости и контакты", "Ogarna 3/4, lok. 3 • tylko po wcześniejszej rezerwacji": "Огарна 3/4, пом. 3 • только по предварительной записи", "Wkrótce": "Скоро", "Link do Instagramu lub Facebooka zostanie dodany po uruchomieniu oficjalnych stron.": "Ссылка на Instagram или Facebook будет добавлена после запуска официальных страниц.",
    "Strona jest dostępna po polsku, rosyjsku, ukraińsku, białorusku i angielsku. Obsługa odbywa się po polsku i rosyjsku, z podstawową komunikacją po angielsku; Alena rozumie ukraiński, ale nie prowadzi obsługi w tym języku.": "Сайт доступен на польском, русском, украинском, белорусском и английском. Обслуживание проводится на польском и русском, базовое общение возможно на английском; Алена понимает украинский, но не ведёт обслуживание на этом языке."
  },
  uk: {
    "Przejdź do treści": "Перейти до вмісту", "Menu": "Меню", "Usługi": "Послуги", "O Alenie": "Про Альону", "Miejsce": "Місце", "Kontakt": "Контакти", "Zarezerwuj": "Забронювати",
    "Masaż • Gdańsk": "Масаж • Гданськ", "Dotyk, który pozwala zwolnić.": "Дотик, що дозволяє сповільнитися.", "Indywidualnie dobrana sesja masażu w spokojnej atmosferze. Sprawdź wolne terminy i zarezerwuj online.": "Індивідуально підібраний масаж у спокійній атмосфері. Перевірте вільний час і забронюйте онлайн.", "Zarezerwuj w Booksy": "Забронювати в Booksy", "Poznaj usługi": "Переглянути послуги",
    "Ponad 3 lata doświadczenia": "Понад 3 роки досвіду", "Polski • rosyjski • podstawowy angielski": "Польська • російська • базова англійська", "Gdańsk Śródmieście": "Гданськ, Середмістя", "Terminy online": "Онлайн-запис", "Aktualna dostępność w Booksy": "Актуальна доступність у Booksy", "Masz już wybraną usługę?": "Вже обрали послугу?", "Sprawdź wolne terminy": "Перевірити вільний час",
    "Wybierz czas dla siebie": "Оберіть час для себе", "Pełna lista, ceny i aktualne terminy są zawsze dostępne w profilu Elenia na Booksy.": "Повний перелік послуг, ціни й актуальний час завжди доступні у профілі Elenia на Booksy.", "Masaż relaksacyjny": "Релаксувальний масаж", "Masaż klasyczny": "Класичний масаж", "Plecy i kark": "Спина й шия", "Cena i terminy w Booksy": "Ціни й час у Booksy",
    "Uważność w każdym spotkaniu": "Уважність у кожній зустрічі", "Najważniejsze są spokój, jasna komunikacja i poczucie, że to naprawdę Twój czas.": "Найважливіші — спокій, зрозуміле спілкування і відчуття, що це справді ваш час.", "Poznaj profil w Booksy": "Відкрити профіль Booksy", "Spokojny rytuał w sercu Gdańska": "Спокійний ритуал у серці Гданська", "Adres": "Адреса", "Dzielnica": "Район", "Śródmieście • Główne Miasto": "Середмістя • Головне місто", "Wizyty": "Прийом", "Po rezerwacji": "За записом", "Wyznacz trasę": "Прокласти маршрут",
    "Rezerwacja": "Бронювання", "Znajdź dogodny termin": "Знайдіть зручний час", "Zdjęcia, aktualności i kontakt": "Фото, новини й контакти", "Ogarna 3/4, lok. 3 • tylko po wcześniejszej rezerwacji": "Огарна 3/4, прим. 3 • лише за попереднім записом", "Wkrótce": "Незабаром", "Link do Instagramu lub Facebooka zostanie dodany po uruchomieniu oficjalnych stron.": "Посилання на Instagram або Facebook буде додано після запуску офіційних сторінок.",
    "Strona jest dostępna po polsku, rosyjsku, ukraińsku, białorusku i angielsku. Obsługa odbywa się po polsku i rosyjsku, z podstawową komunikacją po angielsku; Alena rozumie ukraiński, ale nie prowadzi obsługi w tym języku.": "Сайт доступний польською, російською, українською, білоруською та англійською. Обслуговування проводиться польською і російською, базове спілкування можливе англійською; Альона розуміє українську, але не проводить обслуговування українською."
  },
  be: {
    "Przejdź do treści": "Перайсці да зместу", "Menu": "Меню", "Usługi": "Паслугі", "O Alenie": "Пра Алену", "Miejsce": "Месца", "Kontakt": "Кантакты", "Zarezerwuj": "Забраніраваць",
    "Masaż • Gdańsk": "Масаж • Гданьск", "Dotyk, który pozwala zwolnić.": "Дотык, які дазваляе запаволіцца.", "Indywidualnie dobrana sesja masażu w spokojnej atmosferze. Sprawdź wolne terminy i zarezerwuj online.": "Індывідуальна падабраны масаж у спакойнай атмасферы. Праверце вольны час і забраніруйце анлайн.", "Zarezerwuj w Booksy": "Забраніраваць у Booksy", "Poznaj usługi": "Паглядзець паслугі",
    "Ponad 3 lata doświadczenia": "Больш за 3 гады досведу", "Polski • rosyjski • podstawowy angielski": "Польская • руская • базавая англійская", "Gdańsk Śródmieście": "Гданьск, Сярэдмесце", "Terminy online": "Анлайн-запіс", "Aktualna dostępność w Booksy": "Актуальная даступнасць у Booksy", "Masz już wybraną usługę?": "Ужо выбралі паслугу?", "Sprawdź wolne terminy": "Праверыць вольны час",
    "Wybierz czas dla siebie": "Выберыце час для сябе", "Pełna lista, ceny i aktualne terminy są zawsze dostępne w profilu Elenia na Booksy.": "Поўны спіс паслуг, цэны і актуальны час заўсёды даступныя ў профілі Elenia на Booksy.", "Masaż relaksacyjny": "Расслабляльны масаж", "Masaż klasyczny": "Класічны масаж", "Plecy i kark": "Спіна і шыя", "Cena i terminy w Booksy": "Цэны і час у Booksy",
    "Uważność w każdym spotkaniu": "Уважлівасць у кожнай сустрэчы", "Najważniejsze są spokój, jasna komunikacja i poczucie, że to naprawdę Twój czas.": "Найважнейшыя — спакой, ясныя зносіны і адчуванне, што гэта сапраўды ваш час.", "Poznaj profil w Booksy": "Адкрыць профіль Booksy", "Spokojny rytuał w sercu Gdańska": "Спакойны рытуал у сэрцы Гданьска", "Adres": "Адрас", "Dzielnica": "Раён", "Śródmieście • Główne Miasto": "Сярэдмесце • Галоўны горад", "Wizyty": "Прыём", "Po rezerwacji": "Па запісе", "Wyznacz trasę": "Пабудаваць маршрут",
    "Rezerwacja": "Браніраванне", "Znajdź dogodny termin": "Знайдзіце зручны час", "Zdjęcia, aktualności i kontakt": "Фота, навіны і кантакты", "Ogarna 3/4, lok. 3 • tylko po wcześniejszej rezerwacji": "Огарна 3/4, пам. 3 • толькі па папярэднім запісе", "Wkrótce": "Хутка", "Link do Instagramu lub Facebooka zostanie dodany po uruchomieniu oficjalnych stron.": "Спасылка на Instagram або Facebook будзе дададзена пасля запуску афіцыйных старонак.",
    "Strona jest dostępna po polsku, rosyjsku, ukraińsku, białorusku i angielsku. Obsługa odbywa się po polsku i rosyjsku, z podstawową komunikacją po angielsku; Alena rozumie ukraiński, ale nie prowadzi obsługi w tym języku.": "Сайт даступны на польскай, рускай, украінскай, беларускай і англійскай мовах. Абслугоўванне вядзецца па-польску і па-руску, базавыя зносіны магчымыя па-англійску; Алена разумее ўкраінскую, але не вядзе абслугоўванне на гэтай мове."
  }
};

const languageSelect = document.querySelector("[data-language]");
const menuButton = document.querySelector("[data-menu]");
const navigation = document.querySelector("[data-nav]");
const notice = document.querySelector("[data-notice]");
const year = document.querySelector("[data-year]");
let noticeTimer;

function translate(element, language) {
  if (language === "pl") return element.dataset.pl;
  if (language === "en") return element.dataset.en;
  return TRANSLATIONS[language]?.[element.dataset.pl] || element.dataset.en;
}

function applyLanguage(language) {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-pl][data-en]").forEach((element) => { element.textContent = translate(element, language); });
  languageSelect.value = language;
}

function showTemporaryNotice() {
  window.clearTimeout(noticeTimer);
  notice.hidden = false;
  noticeTimer = window.setTimeout(() => { notice.hidden = true; }, 4200);
}

document.querySelectorAll("[data-link]").forEach((link) => {
  const url = SITE_LINKS[link.dataset.link];
  if (url) { link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer"; return; }
  link.setAttribute("aria-disabled", "true");
  link.addEventListener("click", (event) => { event.preventDefault(); showTemporaryNotice(); });
});

languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("is-open", !expanded);
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}));
year.textContent = String(new Date().getFullYear());
applyLanguage("pl");

