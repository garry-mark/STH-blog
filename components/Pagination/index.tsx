import * as React from "react";
import { Pagination } from "../../services/article";
import styles from "./Pagination.module.scss";

interface PaginationProps extends Pagination {
  onCurrentChange: (currentPage: number) => {};
  disabled: boolean;
  showNumberLen?: number;
}

interface PaginationState {
  _total: number;
  _currentPage: number;
  _pageCount: number;
  _showNumberLen: number;
}

class PaginationComp extends React.Component<PaginationProps, PaginationState> {
  public state = {
    _total: 100,
    _currentPage: 1,
    _pageCount: 10,
    _showNumberLen: 5,
  };

  componentDidMount() {
    const {
      total = 100,
      currentPage = 1,
      pageCount = 10,
      showNumberLen = 5,
    } = this.props;
    console.log(this.props);
    this.setState({
      _total: total,
      _currentPage: currentPage,
      _pageCount: pageCount,
      _showNumberLen: showNumberLen,
    });
  }

  private arrowClick(direction: 1 | -1 = 1) {
    const { _currentPage, _pageCount } = this.state;
    if (direction === -1 ? _currentPage > 1 : _currentPage < _pageCount) {
      this.setCurrentIndex(_currentPage + direction);
    }
  }

  private setCurrentIndex(index) {
    const { onCurrentChange, disabled } = this.props;
    if (disabled) return;
    onCurrentChange && onCurrentChange(index);
    this.setState({ _currentPage: index });
  }

  public render() {
    const { disabled } = this.props;
    const { _currentPage, _pageCount, _showNumberLen } = this.state;
    return (
      <nav
        className={`${styles.pagination} ${disabled ? styles.disabled : ""}`}
      >
        <a onClick={this.arrowClick.bind(this, -1)}>&lt;</a>
        <a
          onClick={this.setCurrentIndex.bind(this, 1)}
          className={`${styles.index} ${
            _currentPage === 1 ? styles.actived : ""
          }`}
        >
          1
        </a>
        {_currentPage > _showNumberLen - 1 && <a>...</a>}
        {Array(_showNumberLen)
          .fill(null)
          .map((i, index) => {
            let cIndex =
              _currentPage > _showNumberLen - 1
                ? _pageCount - _currentPage <= _showNumberLen - 1
                  ? _pageCount - _showNumberLen + index
                  : _currentPage - 2 + index
                : index + 2;
            return (
              <a
                onClick={this.setCurrentIndex.bind(this, cIndex)}
                className={`${styles.index}
                ${_currentPage === cIndex ? styles.actived : ""}`}
                key={index}
              >
                {cIndex}
              </a>
            );
          })}
        {_pageCount - _currentPage > _showNumberLen - 1 && <a>...</a>}
        <a
          onClick={this.setCurrentIndex.bind(this, _pageCount)}
          className={`${styles.index} ${
            _currentPage === _pageCount ? styles.actived : ""
          }`}
        >
          {_pageCount}
        </a>
        <a onClick={this.arrowClick.bind(this, 1)}>&gt;</a>
      </nav>
    );
  }
}

export default PaginationComp;
