import{u as c,q as x,r as a,j as e,a1 as g,a2 as C,A as j}from"./index-gK2J3_II.js";const D=c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--main-transition);
`,r=c.span`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);
  cursor: pointer;
  color: #efefef;

  &.handler,
  &.confirm {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }

  &.cancel {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.8rem;
  }
`;function b({handler:t,withDispatch:i,title:n}){const f=x(),[d,s]=a.useState(!1),[,l]=a.useState(!1),[,o]=a.useState(!1);function u(){l(!1),o(!1),s(!0)}function m(){t&&i?f(t()):t&&!i&&t(),l(!0),s(!1)}function h(){o(!0),s(!1)}return e.jsx(D,{children:d?e.jsxs(e.Fragment,{children:[e.jsx(r,{className:"cancel",title:`Cancel ${n}`,onClick:h,children:e.jsx(g,{})}),e.jsx(r,{className:"confirm",title:`Confirm ${n}`,onClick:m,children:e.jsx(C,{})})]}):e.jsx(r,{className:"handler",title:`${n}`,onClick:u,children:e.jsx(j,{})})})}export{b as D};
