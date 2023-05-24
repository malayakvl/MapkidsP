import React, { useEffect } from "react";
// import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { showLoaderAction } from "../../redux/layouts/actions";
import {
  reloadSelector,
  showColorsPopupSelector,
} from "../../redux/layouts/selectors";
import { isDataLoadingSelector } from "../../redux/layouts/selectors";
import { setupStorageData } from "../../lib/functions";
import { changeReloadAction } from "../../redux/layouts";

export default function MainLayout({ children }: { children: any }) {
  const dispatch = useDispatch();
  const backdropSelector = useSelector(showColorsPopupSelector);
  const showLoader = useSelector(isDataLoadingSelector);
  const reloadState = useSelector(reloadSelector);

  useEffect(() => {
    if (reloadState) {
      setupStorageData(dispatch);
    }
    dispatch(changeReloadAction(false));
    dispatch(showLoaderAction);
  }, [reloadState, dispatch]);

  return (
    <>
      {showLoader && (
        <div className="loader">
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      {/*<Header />*/}
      <main>{children}</main>
    </>
  );
}
