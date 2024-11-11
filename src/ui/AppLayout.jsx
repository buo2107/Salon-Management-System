// import { Outlet } from "react-router-dom";
// import Siderbar from "./Siderbar";
// import Header from "./Header";

import Header from "./Header";

// const StyledAppLayout = styled.div`
//   display: grid;
//   grid-template-columns: 24rem 1fr;
//   grid-template-rows: auto 1fr;
//   height: 100vh;
// `;

// const Main = styled.main`
//   background-color: var(--color-grey-50);
//   padding: 4rem 4.8rem 6.4rem;
//   overflow: scroll;
// `;

// const Container = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      {/* <div className="bg-teal-900">header</div> */}
      <Header />
      <div className="bg-indigo-700">sidebar</div>
      <div className="bg-yellow-900">main</div>
    </div>
    // <StyledAppLayout>
    //   <Header />
    //   <Siderbar />
    //   <Main>
    //     <Container>
    //       <Outlet />
    //     </Container>
    //   </Main>
    // </StyledAppLayout>
  );
}

export default AppLayout;
