import {
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineScissors,
  HiOutlineUserGroup,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineCalendarDays,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-full);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-400);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>儀錶板</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>預約/臨時</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">
            <HiOutlineScissors />
            <span>服務項目</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/guests">
            <HiOutlineUserGroup />
            <span>客戶資料</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/accountingLedger">
            <HiOutlineCurrencyDollar />
            <span>記帳本</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUserPlus />
            <span>新增員工</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineAdjustmentsHorizontal />
            <span>設定</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
