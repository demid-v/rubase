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
          <div className="page-header__right-side">
            <span className="page-header__filter"> Фильтр</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
