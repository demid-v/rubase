import filterIcon from "../../assets/icons/filter.svg";
import headerBorderIcon from "../../assets/icons/header-border.svg";

function Header() {
  return (
    <header className="page-header deals-page-header">
      <div className="page-header__content">
        <div className="page-header__main deals-page-header__main">
          <span className="page-header__title deals-page-header__title">
            Сделки
          </span>
        </div>
        <div className="page-header__details">
          <div className="page-header__info">
            <span className="page-header__info-block">
              <span className="page-header__info-title">Сделок за период</span>
              <span className="page-header__info-amount">1 518</span>
            </span>
            <span className="page-header__info-block">
              <span className="page-header__info-title">На сумму</span>
              <span className="page-header__info-amount">192 млн. $</span>
            </span>
          </div>
          <button className="page-header__right-side">
            <span className="page-header__filter-tab-button">Фильтр</span>
            <img src={filterIcon} alt="" />
          </button>
        </div>
      </div>

      <div className="page-header__filter">
        <div className="page-header__filter-border-wrapper">
          <img
            src={headerBorderIcon}
            alt=""
            className="page-header__filter-border"
          />
        </div>

        <div className="page-header__filter-options">
          <div className="page-header__filter-option">
            <label
              className="page-header__filter-option-title"
              htmlFor="page-header__filter-all-deals"
            >
              Тип сделки
            </label>
            <select
              name="pets"
              id="page-header__filter-all-deals"
              className="page-header__filter-option-select"
            >
              <option value="">Все типы сделок</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </div>

          <div className="page-header__filter-option">
            <label
              className="page-header__filter-option-title"
              htmlFor="page-header__filter-sum"
            >
              Сумма
            </label>
            <select
              name="pets"
              id="page-header__filter-sum"
              className="page-header__filter-option-select"
            >
              <option value="">Все сделки</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </div>

          <div className="page-header__filter-option">
            <label
              className="page-header__filter-option-title"
              htmlFor="page-header__filter-niche"
            >
              Ниша
            </label>
            <select
              name="pets"
              id="page-header__filter-niche"
              className="page-header__filter-option-select"
            >
              <option value="">Все нишы</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </div>

          <div className="page-header__filter-option">
            <label
              className="page-header__filter-option-title"
              htmlFor="page-header__filter-periods"
            >
              Периоды
            </label>
            <select
              name="pets"
              id="page-header__filter-periods"
              className="page-header__filter-option-select"
            >
              <option value="">Все периоды</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </div>

          <span className="page-header__filter-button-wrapper">
            <button className="page-header__filter-button">Очистить</button>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
