import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #000;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 2rem;
  height: 100%;
  cursor: pointer;
  color: white;
  font-size: ${({ isOpen }) => (isOpen ? "1.5rem" : "1.2rem")};
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    a{
      font-size: 1.45rem
    }
    width: 100%;
  }
`;

export const Barsbutton = styled.div`
  width: 35px;
  height: 30px;
  margin-right: 15px;
  margin-top: 2px;
  position: relative;
  cursor: pointer;
  display: none;
  span{
    background-color:#fff;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
    transition-duration: 500ms
  };
  span:nth-child(1){
    top:0px;
    left: 0px;
  };
  span:nth-child(2){
    top:13px;
    left: 0px;
    opacity:1;
  };
  span:nth-child(3){
    bottom:0px;
    left: 0px;
  };
  &:not(.open):hover span:nth-child(1){
    transform: rotate(-3deg) scaleY(1.1);
  };
  &:not(.open):hover span:nth-child(2){
    transform: rotate(3deg) scaleY(1.1);
  };
  &:not(.open):hover span:nth-child(3){
    transform: rotate(-4deg) scaleY(1.1);
  };
  &.open span:nth-child(1){
    transform: rotate(45deg);
    top: 13px;
  };
  &.open span:nth-child(2){
    opacity:0;
  };
  &.open span:nth-child(3){
    transform: rotate(-45deg);
    top: 13px;
  };
  @media (max-width: 768px) {
    display: inline-block;
  }
`;