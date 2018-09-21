import * as types from './mutationsTypes';
import Num from '../assets/utils/num';

export default {
  searchMusic: ({ commit }, data) => {
    commit(types.SEARCH_MUSIC, data);
  },
  updateSelectedTag: ({ commit }, data) => {
    commit(types.UPDATE_SELECTED_TAG, data);
  },
  updateRandomHistory: ({ commit }, data) => {
    commit(types.UPDATE_RANDOM_HISTORY, data);
  },
  updatePlayerInfo: ({ commit }, data) => {
    commit(types.UPDATE_PLAYER_INFO, data);
  },
  setDownLoading: ({ commit }, data) => {
    commit(types.SET_DOWNLOADING, data);
  },
  updateSongDetail: ({ commit }, data) => {
    commit(types.UPDATE_SONG_DETAIL, data);
  },
  setLoading: ({ commit }, data) => {
    commit(types.SET_LOADING, data);
  },
  playPrev: ({ commit }) => {
    commit(types.PLAY_PREV);
  },
  playNext: ({ commit }) => {
    commit(types.PLAY_NEXT);
  },
  updatePlayNow: ({ commit }, data) => {
    commit(types.UPDATE_PLAY_NOW, data);
  },
  setSysTag: ({ commit }, data) => {
    commit(types.SET_SYS_TAG, data);
  },
  setAllSongs: ({ commit }, data) => {
    const allSongs = {};
    data.forEach((item) => allSongs[item.objectId] = item);

    commit(types.SET_ALL_SONGS, allSongs);
    commit(types.CHANGE_SHOW_LIST, Object.values(allSongs));
    commit(types.UPDATE_PLAY_NOW, data[Num(Math.random() * (data.length - 1))]);
  },
  // 更新播放状态
  updatePlayingStatus: ({ commit }, data) => {
    commit(types.UPDATE_PLAYING_STATUS, data);
  }
}