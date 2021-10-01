import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import FeedBox from "../components/FeedBox";
import { useDispatch } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import { LOAD_MY_INFO_REQUEST, SIGN_IN_REQUEST } from "../reducers/user";
import FeedCreatForm from "../components/FeedCreateForm";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  return (
    <AppLayout>
      {me && <FeedCreatForm />}
      <FeedBox />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // SSR Cookie Settings For Data Load/////////////////////////////////////
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    ////////////////////////////////////////////////////////////////////////
    // 구현부

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
