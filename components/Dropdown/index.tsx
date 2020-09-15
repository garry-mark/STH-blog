import * as React from "react";
import styles from "./Dropdown.module.scss";

export interface DropdownMenuItem {
  name: string;
  key: string;
  value: number;
  disabled: boolean;
}

interface DropdownProps {
  menu: Array<DropdownMenuItem>;
  onCommand: (key: string) => void;
  className: string;
  tiggerType: "click" | "hover";
}

interface DropdownState {
  isShow: boolean;
}
class DropdownComp extends React.Component<DropdownProps, DropdownState> {
  public static defaultProps = {
    tiggerType: "hover",
  };

  public state: DropdownState = {
    isShow: false,
  };

  public handleCommand(key: string) {
    this.props.onCommand(key);
    this.setState({ isShow: false });
  }

  componentDidMount() {}

  public render() {
    const { children, className, menu } = this.props;
    const { isShow } = this.state;

    return (
      <div
        onMouseEnter={() => this.setState({ isShow: true })}
        onMouseLeave={() => this.setState({ isShow: false })}
        className={`${className} ${styles.dropdown}`}
      >
        {children}
        <div className={styles.dropdownMenuWrapper}>
          <ul
            className={`${styles.dropdownMenu}  ${isShow ? styles.active : ""}`}
          >
            {menu.map(({ disabled, key, name }) => (
              <li
                className={disabled ? "disabled" : ""}
                key={key}
                onClick={this.handleCommand.bind(this, key)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default DropdownComp;
