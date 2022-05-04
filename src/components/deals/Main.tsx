import table from "../../assets/icons/table.svg";
import map from "../../assets/icons/map.svg";
import linkIcon from "../../assets/icons/link.svg";

function Main() {
  return (
    <main className="deals-main">
      <header className="deals-main__header">
        <div className="deals-main__date-selector">
          <button className="deals-main__date-button deals-main__date-button_inactive deals-main__date-prev">
            <svg
              width="11"
              height="30"
              viewBox="0 0 11 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.15167 15L10.8682 1.49618L9.13168 0.503906L0.848169 15L9.13168 29.4962L10.8682 28.5039L3.15167 15Z"
              />
            </svg>
          </button>
          <span className="deals-main__date">Июль 2021</span>
          <button className="deals-main__date-button deals-main__date-button_active deals-main__date-next">
            <svg
              width="11"
              height="30"
              viewBox="0 0 11 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.15167 15L10.8682 1.49618L9.13168 0.503906L0.848169 15L9.13168 29.4962L10.8682 28.5039L3.15167 15Z"
              />
            </svg>
          </button>
        </div>
        <div className="deals-main__table-modes">
          <img className="deals-main__table-mode" src={table} alt="" />
          <img className="deals-main__table-mode" src={map} alt="" />
        </div>
      </header>

      <div className="deals-table__wrapper">
        <div className="deals-table__search">
          <div className="deals-table__search-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 15L22 21L20.5858 22.4142L14.5858 16.4142L16 15Z"
                fill="#999999"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 17C14.0899 17 17 14.0899 17 10.5C17 6.91015 14.0899 4 10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17ZM10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.80558 15.1944 2 10.5 2C5.80558 2 2 5.80558 2 10.5C2 15.1944 5.80558 19 10.5 19Z"
                fill="#999999"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Быстрый поиск"
            className="deals-table__search-bar"
          />
        </div>
        <table className="table deals-main__table">
          <colgroup>
            <col className="deals-table__col-date" />
            <col />
            <col className="deals-table__col-deal-type" />
            <col className="deals-table__col-sum" />
            <col />
            <col className="deals-table__col-link" />
          </colgroup>

          <thead className="table__head">
            <tr className="table__head-row">
              <th className="table__head-cell table__cell-first">Дата</th>
              <th className="table__head-cell">Компания</th>
              <th className="table__head-cell">Тип сделки</th>
              <th className="table__head-cell">Сумма</th>
              <th className="table__head-cell">Инвестор</th>
              <th className="table__head-cell"></th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className="table-row">
              <td className="table__body-cell table__col-fixed table__cell-first table__cell-flexible-gap">
                14.10
              </td>
              <td className="table__body-cell table__col-flexible table__cell-flexible-gap">
                GetCourse
              </td>
              <td className="table__body-cell table__col-fixed table__cell-flexible-gap">
                Грант
              </td>
              <td className="table__body-cell table__col-fixed table__cell-flexible-gap">
                $ 21 370 000
              </td>
              <td className="table__body-cell table__col-flexible">
                TMT Investments
              </td>
              <td className="table__body-cell table__col-fixed table__cell-last">
                <img src={linkIcon} alt="" />
              </td>
            </tr>
            <tr className="table-row">
              <td className="table__body-cell table__col-fixed table__cell-first table__cell-flexible-gap">
                14.10
              </td>
              <td className="table__body-cell table__col-flexible table__cell-flexible-gap">
                Postoplan
              </td>
              <td className="table__body-cell table__col-fixed table__cell-flexible-gap">
                Покупка
              </td>
              <td className="table__body-cell table__col-fixed table__cell-flexible-gap">
                $ 370 000
              </td>
              <td className="table__body-cell table__col-flexible">
                Owl Ventures, Goodwater Capital, LETA Capital, PortfoLion, TMT
                Investments, Xploration Capital, Learn Capital
              </td>
              <td className="table__body-cell table__col-fixed table__cell-last">
                <img src={linkIcon} alt="" />
              </td>
            </tr>
            <tr className="table-row">
              <td className="table__body-cell table__col-fixed table__cell-first table__cell-flexible-gap">
                15.10
              </td>
              <td className="table__body-cell table__col-flexible table__cell-flexible-gap">
                VOCHI
              </td>
              <td className="table__body-cell table__col-fixed table__cell-flexible-gap">
                M&A
              </td>
              <td className="table__body-cell table__col-fixed table__cell-flexible-gap">
                $ 4 370 000
              </td>
              <td className="table__body-cell table__col-flexible">
                Sequoia Capital, G Squared, D1 Capital Partners
              </td>
              <td className="table__body-cell table__col-fixed table__cell-last">
                <img src={linkIcon} alt="" />
              </td>
            </tr>
            <tr className="table-row">
              <td className="table__body-cell table__col-fixed table__cell-first table__cell-flexible-gap">
                22.01
              </td>
              <td className="table__body-cell table__col-flexible table__cell-flexible-gap">
                42 секунды
              </td>
              <td className="table__body-cell table__col-fixed table__cell-flexible-gap">
                PreSeed
              </td>
              <td className="table__body-cell table__col-fixed table__cell-flexible-gap">
                N/A
              </td>
              <td className="table__body-cell table__col-flexible">
                Angelsdeck
              </td>
              <td className="table__body-cell table__col-fixed table__cell-last">
                <img src={linkIcon} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="deals-table__show-more">
          <div className="deals-table__show-more-content">
            <span className="deals-table__page-count">15/32</span>
            <span className="deals-table__show-more-text">Показать еще</span>
          </div>
        </button>
      </div>
    </main>
  );
}

export default Main;
