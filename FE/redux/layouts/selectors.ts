import { createSelector } from "reselect";

// ------------------------------------
// Selectors
// ------------------------------------

const rootSelector = createSelector(
  (state: State.Root) => state.layouts,
  (layouts: State.Layouts): State.Layouts => layouts
);

export const toggleMenuSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): boolean => layouts.toggleMenu
);

export const isDataLoadingSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): boolean => layouts.isDataLoading
);

export const reloadSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): boolean => layouts.isReload
);
export const startDownloadSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): boolean => layouts.startDownload
);

export const toastsSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): Layouts.Toast[] => layouts.toasts
);

export const showColorsPopupSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): boolean => layouts.showModalColorPopup
);

export const fileNameSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): string | null => layouts.fileName
);

export const paginationSelectorFactory = (type: string) =>
  createSelector(
    rootSelector,
    (layouts: State.Layouts): Layouts.Pagination =>
      (layouts.pagination as any)[type]
  );

export const checkedIdsSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): Layouts.CheckedIds[] => layouts.checkedIds
);

export const switchHeaderSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): boolean => layouts.switchHeader
);

export const modalConfirmationMetaSelector = createSelector(
  rootSelector,
  (layouts: State.Layouts): Layouts.ModalConfirmationMeta | null =>
    layouts.modalConfirmationMeta
);

