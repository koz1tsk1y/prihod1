import { useEffect, useState } from "react"

const schedule = [
  {
    day: "21",
    weekday: "среда",
    title: "Иконы Божией Матери «Всех скорбящих Радость»",
    services: [
      ["08:00", "Божественная литургия"],
      ["18:00", "Вечернее богослужение"],
    ],
  },
  {
    day: "22",
    weekday: "четверг",
    title: "Святителя Нектария Эгинского",
    services: [["09:00", "Молебен с акафистом"]],
  },
  {
    day: "23",
    weekday: "пятница",
    title: "Апостолов от 70-ти Ераста и Олимпа",
    services: [["18:00", "Вечернее богослужение"]],
  },
  {
    day: "24",
    weekday: "суббота",
    title: "Неделя 24-я по Пятидесятнице",
    services: [
      ["09:00", "Божественная литургия"],
      ["17:00", "Всенощное бдение"],
    ],
  },
  {
    day: "25",
    weekday: "воскресенье",
    title: "Святителя Иоанна Милостивого",
    services: [
      ["07:00", "Ранняя Божественная литургия"],
      ["10:00", "Поздняя Божественная литургия"],
    ],
    featured: true,
  },
]

const events = [
  {
    date: "18 ноября 2024",
    category: "Приходская жизнь",
    title: "Открыт набор в школу алтарников",
    text: "Приглашаем мальчиков от семи лет учиться помогать в алтаре и узнавать традиции богослужения.",
    image: "/images/altar-school.jpg",
    position: "50% 16%",
  },
  {
    date: "12 ноября 2024",
    category: "Летопись храма",
    title: "Как возводился наш храм",
    text: "Продолжаем делиться историей строительства и людьми, которые помогали храму расти.",
    image: "/images/church-construction.jpg",
    position: "50% 42%",
  },
  {
    date: "4 ноября 2024",
    category: "Праздники",
    title: "День Казанской иконы Божией Матери",
    text: "Фотографии и слова благодарности после праздничной Божественной литургии.",
    image: "/images/church-photo.jpg",
    position: "50% 48%",
  },
  {
    date: "2 ноября 2024",
    category: "Милосердие",
    title: "Сбор помощи нуждающимся семьям",
    text: "Приходская служба милосердия приглашает присоединиться к доброму делу.",
    image: "/images/church-illustration.jpg",
    position: "18% 58%",
  },
  {
    date: "27 октября 2024",
    category: "Воскресная школа",
    title: "Первое занятие нового учебного года",
    text: "Дети познакомились с педагогами и начали путешествие по истории Церкви.",
    image: "/images/altar-school.jpg",
    position: "50% 35%",
  },
  {
    date: "20 октября 2024",
    category: "Молодёжное братство",
    title: "Встреча за общим столом",
    text: "Разговор о вере, выборе жизненного пути и новых приходских проектах.",
    image: "/images/church-aerial.jpg",
    position: "50% 45%",
  },
  {
    date: "14 октября 2024",
    category: "Праздники",
    title: "Покров Пресвятой Богородицы",
    text: "Как в приходе прошли праздничная литургия и общая молитва.",
    image: "/images/church-photo.jpg",
    position: "50% 45%",
  },
]

const searchEntries = [
  {
    title: "Церковный календарь",
    description: "Память святых, пост и чтения дня",
    section: "calendar",
    type: "Раздел",
  },
  {
    title: "Расписание богослужений",
    description: "Литургии, молебны и вечерние богослужения",
    section: "schedule",
    type: "Раздел",
  },
  {
    title: "О нашем приходе",
    description: "История и жизнь храма Рождества Христова",
    section: "about",
    type: "Раздел",
  },
  ...schedule.map((item) => ({
    title: item.title,
    description: `${item.weekday}, ${item.day} ноября`,
    section: "schedule",
    type: "Богослужение",
  })),
  ...events.map((event) => ({
    title: event.title,
    description: event.text,
    section: "events",
    type: event.category,
  })),
]

const calendarDays = [
  {
    day: "24",
    weekday: "Пн",
    weekdayFull: "Понедельник",
    title: "Преподобного Феодора Студита, исповедника",
    fast: "Поста нет",
    food: "Разрешается скоромная пища",
    apostle: "1 Фес. 1:1–5",
    gospel: "Лк. 10:22–24",
  },
  {
    day: "25",
    weekday: "Вт",
    weekdayFull: "Вторник",
    title: "Святителя Иоанна Милостивого, патриарха Александрийского",
    fast: "Поста нет",
    food: "Разрешается скоромная пища",
    apostle: "1 Фес. 1:6–10",
    gospel: "Лк. 11:1–10",
  },
  {
    day: "26",
    weekday: "Ср",
    weekdayFull: "Среда",
    title: "Святителя Иоанна Златоуста, архиепископа Константинопольского",
    fast: "Постный день",
    food: "Разрешается пища с растительным маслом",
    apostle: "1 Тим. 5:22–6:11",
    gospel: "Лк. 18:15–17, 26–30",
  },
  {
    day: "27",
    weekday: "Чт",
    weekdayFull: "Четверг",
    title: "Апостола Филиппа, одного из двенадцати",
    fast: "Заговенье",
    food: "Последний день перед Рождественским постом",
    apostle: "1 Фес. 2:9–14",
    gospel: "Лк. 11:14–23",
  },
  {
    day: "28",
    weekday: "Пт",
    weekdayFull: "Пятница",
    title: "Начало Рождественского поста. Мучеников Гурия, Самона и Авива",
    fast: "Рождественский пост",
    food: "Постная пища без масла",
    apostle: "1 Фес. 2:14–19",
    gospel: "Лк. 11:23–26",
  },
  {
    day: "29",
    weekday: "Сб",
    weekdayFull: "Суббота",
    title: "Апостола и евангелиста Матфея",
    fast: "Рождественский пост",
    food: "Разрешается рыба",
    apostle: "Рим. 10:11–11:2",
    gospel: "Мф. 9:9–13",
  },
  {
    day: "30",
    weekday: "Вс",
    weekdayFull: "Воскресенье",
    title: "Святителя Григория Чудотворца, епископа Неокесарийского",
    fast: "Рождественский пост",
    food: "Разрешается рыба",
    apostle: "Еф. 2:14–22",
    gospel: "Лк. 12:16–21",
  },
]

function CrossMark({ light = false }: { light?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="cross-mark"
      viewBox="0 0 48 72"
      fill="none"
      style={{ color: light ? "#f5eddf" : "#9b5d45" }}
    >
      <path
        d="M24 2V70M12 15H36M7 29H41M14 52L24 43L34 52"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  )
}

function Arrow({ left = false }: { left?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d={left ? "M20 12H4m0 0 6-6m-6 6 6 6" : "M4 12h16m0 0-6-6m6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle
        cx="10.8"
        cy="10.8"
        r="6.6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [weekOffset, setWeekOffset] = useState(0)
  const [selectedCalendarDay, setSelectedCalendarDay] = useState("26")

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = searchOpen || menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen, searchOpen])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
    setSearchOpen(false)
  }

  const normalizedQuery = searchQuery.trim().toLocaleLowerCase("ru")
  const searchResults = normalizedQuery
    ? searchEntries.filter((entry) =>
        `${entry.title} ${entry.description} ${entry.type}`
          .toLocaleLowerCase("ru")
          .includes(normalizedQuery),
      )
    : searchEntries.slice(0, 5)
  const selectedCalendar =
    calendarDays.find((item) => item.day === selectedCalendarDay) ??
    calendarDays[2]

  return (
    <main>
      <header className="site-header">
        <button
          className="brand"
          onClick={() => scrollTo("home")}
          aria-label="На главную"
        >
          <span className="brand-symbol">
            <CrossMark />
          </span>
          <span>
            <b>Приход храма</b>
            <small>Рождества Христова</small>
          </span>
        </button>

        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Главная навигация"
        >
          <button onClick={() => scrollTo("calendar")}>Календарь</button>
          <button onClick={() => scrollTo("schedule")}>Расписание</button>
          <button onClick={() => scrollTo("events")}>События</button>
          <button onClick={() => scrollTo("about")}>О храме</button>
          <button onClick={() => scrollTo("contact")}>Контакты</button>
        </nav>

        <div className="header-actions">
          <button
            className="search-button"
            onClick={() => {
              setMenuOpen(false)
              setSearchOpen(true)
            }}
            aria-label="Поиск по сайту"
          >
            <SearchIcon />
            <span>Поиск</span>
          </button>
          <button className="header-cta" onClick={() => scrollTo("contact")}>
            Помочь храму
          </button>
        </div>
        <button
          className={menuOpen ? "menu-button active" : "menu-button"}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={
          searchOpen ? "search-overlay search-overlay-open" : "search-overlay"
        }
        aria-hidden={!searchOpen}
      >
        <div className="search-topline">
          <span>Поиск по сайту</span>
          <button
            onClick={() => {
              setSearchOpen(false)
              setSearchQuery("")
            }}
            aria-label="Закрыть поиск"
          >
            Закрыть
          </button>
        </div>
        <div className="search-inner">
          <div className="search-field">
            <SearchIcon />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Что вы хотите найти?"
              autoFocus={searchOpen}
              tabIndex={searchOpen ? 0 : -1}
            />
          </div>
          <p className="search-caption">
            {normalizedQuery
              ? `Найдено: ${searchResults.length}`
              : "Популярные разделы и материалы"}
          </p>
          <div className="search-results">
            {searchResults.map((entry, index) => (
              <button
                key={`${entry.title}-${index}`}
                onClick={() => {
                  scrollTo(entry.section)
                  setSearchQuery("")
                }}
                tabIndex={searchOpen ? 0 : -1}
              >
                <span className="result-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="result-copy">
                  <small>{entry.type}</small>
                  <strong>{entry.title}</strong>
                  <span>{entry.description}</span>
                </span>
                <Arrow />
              </button>
            ))}
            {searchResults.length === 0 && (
              <p className="empty-search">
                Ничего не найдено. Попробуйте написать «расписание», «храм» или
                название праздника.
              </p>
            )}
          </div>
        </div>
      </div>

      <section className="hero" id="home">
        <div className="hero-sun" />
        <div className="hero-copy">
          <p className="eyebrow">Белорусский экзархат · Брест</p>
          <h1>
            Приход храма
            <br />
            <em>Рождества Христова</em>
            <br />в городе Бресте
          </h1>
          <p className="hero-note">
            Место молитвы, встречи и тишины.
            <br />
            Мы рады каждому, кто приходит с открытым сердцем.
          </p>
          <button
            className="round-link"
            onClick={() => scrollTo("schedule")}
            aria-label="К расписанию"
          >
            <Arrow />
          </button>
        </div>
        <div className="hero-caption">
          <span>52° 06′ N</span>
          <span>23° 44′ E</span>
        </div>
        <div className="scroll-hint">
          <span />
          листайте вниз
        </div>
      </section>

      <section className="welcome" aria-label="Приветствие">
        <div className="ornament">✦</div>
        <p>«Где двое или трое собраны во имя Моё, там Я посреди них»</p>
        <span>От Матфея, 18:20</span>
      </section>

      <section className="calendar section" id="calendar">
        <div className="calendar-heading">
          <p className="eyebrow">Православный календарь</p>
          <h2>
            День в церковном
            <br />
            <em>календаре</em>
          </h2>
        </div>
        <div className="calendar-card">
          <div className="calendar-visual">
            <img
              src="/images/church-photo.jpg"
              alt="Храм Рождества Христова в Бресте"
            />
            <span className="calendar-visual-caption">
              Брест · храм сегодня
            </span>
            <div className="calendar-date">
              <span>Ноябрь</span>
              <strong>{selectedCalendar.day}</strong>
              <p>{selectedCalendar.weekdayFull}</p>
            </div>
          </div>
          <div className="calendar-main">
            <span className="calendar-label">Память дня</span>
            <h3>{selectedCalendar.title}</h3>
            <p>
              Память святых помогает увидеть церковный год как живую историю
              веры. В этот день мы вспоминаем их путь и обращаемся к духовному
              наследию Церкви.
            </p>
            <button className="text-link" onClick={() => scrollTo("schedule")}>
              Богослужения этого дня <Arrow />
            </button>
          </div>
          <div className="calendar-meta">
            <div>
              <span>Пост</span>
              <strong>{selectedCalendar.fast}</strong>
              <p>{selectedCalendar.food}</p>
            </div>
            <div>
              <span>Чтения дня</span>
              <strong>{selectedCalendar.apostle}</strong>
              <p>{selectedCalendar.gospel}</p>
            </div>
          </div>
        </div>
        <div className="calendar-days" aria-label="Ближайшие дни календаря">
          {calendarDays.map((item) => (
            <button
              className={item.day === selectedCalendarDay ? "active" : ""}
              key={item.day}
              onClick={() => setSelectedCalendarDay(item.day)}
              aria-pressed={item.day === selectedCalendarDay}
            >
              <span>{item.weekday}</span>
              <strong>{item.day}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="schedule section" id="schedule">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Богослужения</p>
            <h2>
              Расписание <em>на неделю</em>
            </h2>
          </div>
          <div className="week-nav">
            <button
              onClick={() => setWeekOffset((value) => Math.max(-1, value - 1))}
              aria-label="Предыдущая неделя"
            >
              <Arrow left />
            </button>
            <span>
              {weekOffset === 0
                ? "21 — 25 ноября"
                : weekOffset < 0
                  ? "14 — 18 ноября"
                  : "28 ноября — 2 декабря"}
            </span>
            <button
              onClick={() => setWeekOffset((value) => Math.min(1, value + 1))}
              aria-label="Следующая неделя"
            >
              <Arrow />
            </button>
          </div>
        </div>

        <div className="schedule-list">
          {schedule.map((item) => (
            <article
              className={
                item.featured ? "schedule-row featured" : "schedule-row"
              }
              key={item.day}
            >
              <div className="schedule-date">
                <strong>
                  {String(Number(item.day) + weekOffset * 7).padStart(2, "0")}
                </strong>
                <span>{item.weekday}</span>
              </div>
              <h3>{item.title}</h3>
              <div className="service-times">
                {item.services.map(([time, label]) => (
                  <p key={time}>
                    <b>{time}</b>
                    <span>{label}</span>
                  </p>
                ))}
              </div>
              {item.featured && <span className="sun-symbol">✦</span>}
            </article>
          ))}
        </div>
        <div className="schedule-footer">
          <p>
            В расписании возможны изменения. Уточнить информацию можно по
            телефону прихода.
          </p>
          <a
            href="/images/service-schedule.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Открыть полное расписание <Arrow />
          </a>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-visual">
          <div className="arch-image">
            <img
              src="/images/church-photo.jpg"
              alt="Храм Рождества Христова в Бресте"
            />
          </div>
          <div className="about-stamp">
            <CrossMark />
            <span>Брест</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">О нашем приходе</p>
          <h2>
            Дом, где каждому
            <br />
            есть <em>место</em>
          </h2>
          <p className="lead">
            Наш приход — это не только стены храма. Это люди, объединённые
            верой, заботой друг о друге и желанием делать мир вокруг светлее.
          </p>
          <p>
            Храм Рождества Христова строится и живёт благодаря прихожанам. Здесь
            совершаются богослужения, проходят занятия для детей и взрослых,
            встречи молодёжи и дела милосердия.
          </p>
          <a
            className="text-link"
            href="/images/church-construction.jpg"
            target="_blank"
            rel="noreferrer"
          >
            История храма <Arrow />
          </a>
        </div>
        <svg
          className="botanical"
          viewBox="0 0 220 340"
          fill="none"
          aria-hidden="true"
        >
          <path d="M168 333C119 264 118 166 179 29M133 232C99 217 74 191 55 151M143 179C174 159 193 130 202 94M119 274C82 275 50 261 22 234" />
          <path d="M51 149C52 119 41 96 20 75C54 78 72 104 51 149ZM202 93C168 89 151 69 154 34C185 44 202 63 202 93ZM21 234C46 207 70 201 96 216C78 242 53 248 21 234ZM132 231C129 198 107 179 74 174C84 208 104 227 132 231Z" />
        </svg>
      </section>

      <section className="events section" id="events">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Жизнь прихода</p>
            <h2>
              Последние <em>события</em>
            </h2>
          </div>
          <span className="heading-note">Новости и объявления прихода</span>
        </div>
        <div className="event-layout">
          <article className="event-feature">
            <div className="event-feature-image">
              <img
                src={events[0].image}
                alt=""
                style={{ objectPosition: events[0].position }}
              />
              <span>{events[0].category}</span>
            </div>
            <div className="event-feature-copy">
              <time>{events[0].date}</time>
              <h3>{events[0].title}</h3>
              <p>{events[0].text}</p>
              <button
                className="text-link"
                onClick={() =>
                  window.open(events[0].image, "_blank", "noopener,noreferrer")
                }
              >
                Читать материал <Arrow />
              </button>
            </div>
          </article>
          <div className="event-feed">
            {events.slice(1).map((event, index) => (
              <article className="event-list-card" key={event.title}>
                <div className="event-list-copy">
                  <span>{event.category}</span>
                  <time>{event.date}</time>
                  <h3>{event.title}</h3>
                </div>
                <div className="event-list-image">
                  <img
                    src={event.image}
                    alt=""
                    style={{ objectPosition: event.position }}
                  />
                </div>
                <button
                  aria-label={`Открыть материал: ${event.title}`}
                  onClick={() =>
                    window.open(event.image, "_blank", "noopener,noreferrer")
                  }
                >
                  <Arrow />
                </button>
                <span className="event-index">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-banner">
        <div className="quote-parallax" />
        <div className="quote-content">
          <CrossMark light />
          <p>Храм начинается не с камня, а с человека</p>
          <span>Присоединяйтесь к жизни нашего прихода</span>
          <button onClick={() => scrollTo("contact")}>
            Стать частью общины
          </button>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Будем рады встрече</p>
          <h2>
            Приходите
            <br />
            <em>как есть</em>
          </h2>
          <p>
            Если вы впервые собираетесь в храм и не знаете, с чего начать,
            просто приходите. Здесь можно помолиться в тишине, поговорить со
            священником или задать любой вопрос.
          </p>
        </div>
        <div className="contact-details">
          <div>
            <span>Адрес</span>
            <p>г. Брест, Республика Беларусь</p>
          </div>
          <div>
            <span>Телефон</span>
            <a href="tel:+375295241117">+375 (29) 524-11-17</a>
          </div>
          <div>
            <span>Социальные сети</span>
            <p>Instagram · Telegram · Viber</p>
          </div>
        </div>
        <a
          className="map-card"
          href="https://maps.google.com/?q=Брест+храм+Рождества+Христова"
          target="_blank"
          rel="noreferrer"
        >
          <span className="map-pin" />
          <span>Открыть на карте</span>
          <Arrow />
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <CrossMark light />
          <p>
            Приход храма
            <br />
            Рождества Христова
          </p>
        </div>
        <p>Белорусская Православная Церковь · Брестская епархия</p>
        <span>© 2025</span>
      </footer>
    </main>
  )
}
