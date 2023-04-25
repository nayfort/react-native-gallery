//import {
//    FETCH_IMAGES_REQUEST,
//    FETCH_IMAGES_SUCCESS,
//    FETCH_IMAGES_FAILURE
//  } from "../constants";
//
//  export const fetchingImagesRequest = () => {
//    return {
//      type: FETCH_IMAGES_REQUEST,
//      isFetching: true
//    };
//  };
//
//  export const fetchingImagesSuccess = json => {
//    return {
//      type: FETCH_IMAGES_SUCCESS,
//      isFetching: false,
//      payload: json
//    };
//  };
//
//  export const fetchingImagesFailure = error => {
//    return {
//      type: FETCH_IMAGES_FAILURE,
//      isFetching: false,
//      payload: error
//    };
//  };
//
//  export const fetchImages = () => async dispatch => {
//    dispatch(fetchingImagesRequest());
//
//    try {
//      const response = await fetch(`https://api.unsplash.com/photos?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043&page=1`);
//      const json = await response.json();
//      dispatch(fetchingImagesSuccess(json));
//    } catch (error) {
//      dispatch(fetchingImagesFailure(error));
//    }
//  };


import { FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from "./constants";

export const fetchingImagesRequest = () => {
  return {
    type: FETCH_IMAGES_REQUEST,
    isFetching: true,
  };
};

export const fetchingImagesSuccess = (json) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    isFetching: false,
    payload: json,
  };
};

export const fetchingImagesFailure = (error) => {
  return {
    type: FETCH_IMAGES_FAILURE,
    isFetching: false,
    payload: error,
  };
};

export const fetchImages = () => async (dispatch) => {
  dispatch(fetchingImagesRequest());

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043&page=1`
    );
    const json = await response.json();
    dispatch(fetchingImagesSuccess(json));
  } catch (error) {
    dispatch(fetchingImagesFailure(error));
  }
};
