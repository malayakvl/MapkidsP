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
    // paginatedProductsSelector,
    itemCountSelector, paginatedItemsSelector
} from '../../redux/images/selectors';
import {
    fetchItemsAction,
    bulkDeleteAction,
    deleteItemAction
} from '../../redux/images/actions';
import { baseApiUrl } from '../../constants';
import { setModalConfirmationMetaAction } from '../../redux/layouts';
// import { BanIcon } from '@heroicons/react/solid';
import { setActivePageAction } from '../../redux/layouts/actions';
import Image from 'next/image';
// import { Filters, FilterValues } from './index';
// import { formatCurrency } from '../../lib/functions';

const ListDatas: React.FC<any> = () => {
    const t = useTranslations();
    const dispatch = useDispatch();
    const count = useSelector(itemCountSelector);

    const items = useSelector(paginatedItemsSelector);
    const checkedIds = useSelector(checkedIdsSelector);

    const [filterOpen, setFilterOpen] = useState(false);
    const { filters }: Layouts.Pagination = useSelector(
        paginationSelectorFactory(PaginationType.IMAGES)
    );

    const sendRequest = useCallback(() => {
        console.log('fetch items');
        return dispatch(fetchItemsAction());
    }, [dispatch]);

    const sendDeleteRequest = useCallback(() => {
        return dispatch(bulkDeleteAction());
    }, [dispatch]);

    useEffect(() => {
        const setupChecked: any = [];
        items.forEach((item: Images.ImageItem) => {
            setupChecked.push({ id: item.id, checked: false });
        });
        dispatch(initIdsAction(setupChecked));
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
                    paginationType={PaginationType.IMAGES}
                    totalAmount={count}
                    sendRequest={sendRequest}
                    sendDeleteRequest={sendDeleteRequest}
                >
                    {items?.map((item:any) => (
                        <Fragment key={item.id}>
                            <tr className="intro-x">
                                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                    <input
                                        className="float-checkbox"
                                        type="checkbox"
                                        onChange={() => dispatch(checkIdsAction(item.id))}
                                        value={item.id}
                                        checked={
                                            checkedIds.find((data: any) => data.id === item.id)
                                                ?.checked || false
                                        }
                                    />
                                </td>
                                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]" style={{ width: "100px" }}>
                                    {item.name && (
                                        <img
                                            src={
                                                /(http(s?)):\/\//i.test(item.name)
                                                    ? item.name
                                                    : `${baseApiUrl}/uploads/photos/${item.name}`
                                            }
                                            alt=""
                                            className="object-scale-down w-[85px] p-1.5"
                                        />
                                    )}
                                </td>
                                <td
                                    className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] text-right whitespace-nowrap"
                                    style={{ minWidth: "150px" }}
                                >
                                    {/*<ButtonTableAction*/}
                                    {/*    dataId={String(item.id)}*/}
                                    {/*    localeKey="View"*/}
                                    {/*    className={"btn-view"}*/}
                                    {/*    onClick={handleEditBtnClick}*/}
                                    {/*/>*/}
                                    <ButtonTableAction
                                        dataId={String(item.id)}
                                        onClick={handleDeleteBtnClick}
                                        localeKey="Delete"
                                        className={"btn-delete"}
                                    />
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
