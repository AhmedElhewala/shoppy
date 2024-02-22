import{i as xe,q as he,y as we,z as ve,_ as B,u as n,f as ye,g as je,r as s,j as e,A as be,B as Se,C as Ee,E as F,F as y,G as q,I as T,n as Pe,J as Ce}from"./index-tiG3UDW2.js";import{u as Ae}from"./index.esm-qdcDLwPc.js";import{F as f}from"./FormRowItem-2pqtEEnQ.js";import{S as ke}from"./Spinner-DmyEU9UC.js";import{u as Ie}from"./useMutation-PJM_96Lm.js";import"./utils-1RRThafF.js";function Fe(){const m=xe(),b=he(),{isLoading:S,mutate:E,error:P}=Ie({mutationFn:r=>we(r.id,r),onSuccess:r=>{m.setQueryData(["user"],r),b(ve(r)),B.success("Account successfully updated! Congratulations 🥳")},onError:r=>{throw B.error("Faild to update! Please try Again after check if you did anything wrong"),new Error("Update error",r)}});return{isLoading:S,update:E,error:P}}const qe=n.form`
  width: 60%;
  padding: 100px 20px 40px;
  background-color: var(--color-grey-300);
  box-shadow: 0 0 8px 2px var(--color-grey-500);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: var(--main-transition);
  position: relative;

  
  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
  }
`,Te=n.div`
  width: 8rem;
  height: 8rem;
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  border-radius: 50%;
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    >div {
      bottom: 0;
    }
  }
`,ze=n.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: var(--main-transition);
`,Be=n.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);

  >svg {
    font-size: 8rem;
  }
`,Ne=n.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: -100%;
  left: 0;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);
  cursor: pointer;
  z-index: 99;

  >svg {
    font-size: 2rem;
  }
`,Re=n.input`
  display: none;
`,Y=n.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
  cursor: pointer;
  transition: var(--main-transition);

  >svg {
    font-size: 1.6rem;
  }
`,g=n.input`
  flex-basis: 80%;
  padding: 8px 12px;
  text-indent: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  transition: var(--main-transition);

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }

  &:disabled {
    background-color: #ccc;
    font-weight: bold;
  }
`,j=n.span`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-grey-100);
  cursor: pointer;
  transition: var(--main-transition);

  >svg {
    transition: var(--main-transition);
  }
`,Ue=n.span`
  width: 100%;
  padding: 6px 12px;
  margin: 1rem 0;
  border-radius: 6px;
  background-color: var(--color-grey-800);
  color: var(--color-grey-200);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.4rem;
`,z=n.span`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-grey-100);
  cursor: pointer;
  transition: var(--main-transition);

  >svg {
    transition: var(--main-transition);
  }
`,He=n.button`
  width: 100%;
  margin: 1rem 0;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  color: #efefef;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
`;function De(){var M,O,Q;const{register:m,formState:b,getValues:S,handleSubmit:E,reset:P}=Ae(),{errors:r}=b,t=ye(je),x=s.useRef(),{update:J}=Fe(),[p,C]=s.useState(!1),[h,A]=s.useState(!1),[w,k]=s.useState(!1),[v,N]=s.useState(!1),[i,I]=s.useState((t==null?void 0:t.avatar)||""),[c,R]=s.useState((t==null?void 0:t.name)||""),[u,U]=s.useState((t==null?void 0:t.email)||""),[H,K]=s.useState(!1),[D,W]=s.useState(!1),[_,Z]=s.useState(!1),[ee,o]=s.useState(!1),[d,L]=s.useState(!1);function $(){x&&x.current&&x.current.click()}function te(){K(a=>!a)}function ae(){W(a=>!a)}function re(){Z(a=>!a)}function G(){C(!0),o(!0),$()}function se(){A(!0),o(!0)}function ne(){k(!0),o(!0)}function ie(){N(!0),o(!0)}async function oe(a){const l=a.target.files[0];if(l){const V=new FormData;V.append("image",l);try{const ge=(await Pe.post(`https://api.imgbb.com/1/upload?key=${Ce}`,V)).data.data.url;I(ge)}catch(X){console.error(`Error uploading image: ${X.message}`)}}}function de(a){R(a.target.value)}function le(a){U(a.target.value)}function ce(){p||G(),I("")}function ue(){I(t.avatar),C(!1),(!w||!h||!v)&&o(!1)}function me(){R(t.name),A(!1),(!w||!p||!v)&&o(!1)}function pe(){U(t.email),k(!1),(!p||!h||!v)&&o(!1)}async function fe({confirmPassword:a}){const l={id:t.id};if(i)i!==t.avatar&&(l.avatar=i);else{B("Please! Add an avatar of you",{icon:"⚠"});return}!c||!u||(c&&c!==t.name&&(l.name=c),u&&u!==t.email&&(l.email=u),a&&(l.password=a),L(!0),J(l,{onSettled:()=>{P(),C(!1),A(!1),k(!1),N(!1),o(!1),L(!1)}}))}return e.jsxs(qe,{onSubmit:E(fe),noValidate:!0,children:[d&&e.jsx(ke,{}),e.jsxs(Te,{children:[e.jsx(Re,{type:"file",name:"avatar",accept:"image/*",onChange:oe,ref:x}),p&&e.jsx(Ne,{onClick:()=>{i?ce():$()},children:i?e.jsx(be,{}):e.jsx(Se,{})}),i?e.jsx(ze,{src:i,alt:"Avatar"}):e.jsx(Be,{children:e.jsx(Ee,{})})]}),p?i!==(t==null?void 0:t.avatar)&&e.jsxs(Y,{onClick:ue,children:[e.jsx("span",{children:"Restore Avatar"}),e.jsx(F,{})]}):e.jsxs(Y,{onClick:G,children:[e.jsx("span",{children:"Edit Avatar"}),e.jsx(y,{})]}),e.jsxs(f,{label:"Username",error:c?"":"This field is required",children:[e.jsx(g,{id:"usernameInput",type:"text",placeholder:"Enter your new username",name:"name",value:c,disabled:!h||d,onChange:de}),h?e.jsx(j,{onClick:me,children:e.jsx(F,{})}):e.jsx(j,{onClick:se,children:e.jsx(y,{})})]},"username input"),e.jsxs(f,{label:"Email",error:u?"":"This field is required",children:[e.jsx(g,{id:"emailInput",type:"email",placeholder:"Enter your new email",name:"name",value:u,disabled:!w||d,onChange:le}),w?e.jsx(j,{onClick:pe,children:e.jsx(F,{})}):e.jsx(j,{onClick:ne,children:e.jsx(y,{})})]},"email input"),v?e.jsxs(e.Fragment,{children:[e.jsxs(f,{label:"Current Password",error:(M=r==null?void 0:r.currentPassword)==null?void 0:M.message,children:[e.jsx(g,{id:"currentPassword",type:H?"text":"password",placeholder:"Enter Your current password",name:"currentPassword",disabled:d,...m("currentPassword",{required:"This field is required",validate:a=>a===t.password||"Wrong password"})}),e.jsx(z,{onClick:te,children:H?e.jsx(q,{}):e.jsx(T,{})})]},"current password"),e.jsxs(f,{label:"New password",error:(O=r==null?void 0:r.newPassword)==null?void 0:O.message,children:[e.jsx(g,{id:"newPasswordInput",type:D?"text":"password",placeholder:"Enter new password",name:"newPassword",disabled:d,...m("newPassword",{required:"This field is required"})}),e.jsx(z,{onClick:ae,children:D?e.jsx(q,{}):e.jsx(T,{})})]},"new password input"),e.jsxs(f,{label:"Confirm Password",error:(Q=r==null?void 0:r.confirmPassword)==null?void 0:Q.message,children:[e.jsx(g,{id:"confirmPassword",type:_?"text":"password",placeholder:"Confirm new password",name:"confirmPassword",disabled:d,...m("confirmPassword",{required:"This field is required",validate:a=>a===S().newPassword||"Passwords need to match"})}),e.jsx(z,{onClick:re,children:_?e.jsx(q,{}):e.jsx(T,{})})]},"confirm password")]}):e.jsxs(Ue,{onClick:ie,disabled:d,children:["Edit password",e.jsx(y,{})]}),ee&&e.jsx(He,{type:"submit",disabled:d,children:"Save"})]})}const _e=n.div`
  width: 100%;
  margin: 0 auto;
  padding: 100px 40px;
  position: relative;
  display: flex;
  justify-content: center;
`;function Ve(){return e.jsx(_e,{children:e.jsx(De,{})})}export{Ve as default};
