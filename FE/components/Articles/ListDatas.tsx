import React, { useCallback, useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslations } from 'next-intl';
import { DataTable, ButtonTableAction } from '../../components/_common';
import { PaginationType } from '../../constants';
import {
    checkedIdsSelector,
    paginationSelectorFactory,
    switchHeaderSelector
} from '../../redux/layouts/selectors';
import { checkIdsAction, initIdsAction } from '../../redux/layouts';
import {
    itemCountSelector, paginatedItemsSelector
} from '../../redux/articles/selectors';
import {
    fetchItemsAction,
    bulkDeleteAction,
    deleteItemAction
} from '../../redux/articles/actions';
import { baseApiUrl } from '../../constants';
import { setModalConfirmationMetaAction } from '../../redux/layouts';
import { setActivePageAction } from '../../redux/layouts/actions';
import Image from 'next/image';


const ListDatas: React.FC<any> = () => {
    const t = useTranslations();
    const dispatch = useDispatch();
    const count = useSelector(itemCountSelector);

    const items = useSelector(paginatedItemsSelector);
    const checkedIds = useSelector(checkedIdsSelector);

    const [filterOpen, setFilterOpen] = useState(false);
    const { filters }: Layouts.Pagination = useSelector(
        paginationSelectorFactory(PaginationType.ARTICLES)
    );

    const sendRequest = useCallback(() => {
        return dispatch(fetchItemsAction());
    }, [dispatch]);

    const sendDeleteRequest = useCallback(() => {
        return dispatch(bulkDeleteAction());
    }, [dispatch]);

    useEffect(() => {
        // const setupChecked: any = [];
        // items.forEach((item: Articles.ArticleItem) => {
        //     setupChecked.push({ id: item.id, checked: false });
        // });
        // dispatch(initIdsAction(setupChecked));
    }, [items]);

    const handleDeleteBtnClick = useCallback(
        (event: React.SyntheticEvent): void => {
            const id = Number(event.currentTarget.getAttribute('data-id'));
            dispatch(
                setModalConfirmationMetaAction({
                    onConfirm: async () => dispatch(deleteItemAction(id)).then(sendRequest)
                })
            );
        },
        [dispatch, sendRequest]
    );

    return (
        <>
            <div className="mt-7">
                <DataTable
                    hideBulk={false}
                    paginationType={PaginationType.ARTICLES}
                    totalAmount={count}
                    sendRequest={sendRequest}
                    sendDeleteRequest={sendDeleteRequest}
                >
                    {items?.map((item:any) => (
                        <Fragment key={item.id}>
                            <tr className="intro-x">
                                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                    {item.title}
                                </td>
                                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]" style={{ width: "100px" }}>
                                    {item.created_at}
                                </td>
                                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                    {item.active ? (
                                        <div class="flex items-center justify-center text-success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-1.5 w-4 h-4 mr-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                            Active
                                        </div>
                                    ) : (
                                        <div class="flex items-center justify-center text-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-1.5 w-4 h-4 mr-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                             Inactive
                                        </div>
                                    ) }
                                </td>
                                <td
                                    className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
                                    style={{ minWidth: "150px" }}
                                >
                                    <div class="flex items-center justify-center">
                                        <a class="flex items-center mr-3" href="">
                                            <Image src="/images/btn-edit.svg" width={16} height={20} />&nbsp;Edit
                                        </a>

                                        <a class="flex items-center text-danger" href="#">
                                            <Image src="/images/btn-delete.svg" width={16} height={20} />&nbsp;Delete
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </Fragment>
                    ))}
                </DataTable>
            </div>
        </>
    );
};

export default ListDatas;
