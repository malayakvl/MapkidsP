import React, { useCallback, useEffect, useState } from 'react';
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
    // bulkDeleteAction,
    // bulkCopyAction,
    // fetchProductAction,
    // deleteProductAction,
    // copyProductAction
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
    // const switchAllHeader = useSelector(switchHeaderSelector);

    const [filterOpen, setFilterOpen] = useState(false);
    const { filters }: Layouts.Pagination = useSelector(
        paginationSelectorFactory(PaginationType.IMAGES)
    );

    const sendRequest = useCallback(() => {
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
                <table className="w-full text-left border-spacing-y-[10px] border-separate -mt-2">
                    <thead>
                        <tr>
                            <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap"> IMAGES </th>
                            <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap"> INSIDE LOCATIONS</th>
                            <th className="font-medium px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap"> ACTIONS </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="intro-x">
                            <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                <div className="flex">
                                    <img src="http://rubick-vue.left4code.com/assets/preview-3.71548c26.jpg" className="object-contain h-[50px] w-auto" />
                                </div>
                            </td>
                            <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                <a href="" className="font-medium whitespace-nowrap">Florida, Alaska</a>
                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5"> USA
                                </div>
                            </td>
                            <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                                <div className="flex items-center justify-center">
                                    <a className="flex items-center mr-3"
                                                                                     href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="stroke-1.5 w-4 h-4 mr-1">
                                        <polyline points="9 11 12 14 22 4"></polyline>
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                    </svg>
                                    Edit </a><a className="flex items-center text-danger" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="stroke-1.5 w-4 h-4 mr-1">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                    Delete </a>
                                </div>
                            </td>
                        </tr>
                        <tr className="intro-x">
                            <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                <div className="flex">
                                    <img src="https://miro.medium.com/v2/resize:fit:1358/0*DCcD8rpNojo4C5FO" className="object-contain h-[50px] w-auto" />
                                </div>
                            </td>
                            <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                <a href="" className="font-medium whitespace-nowrap">Something</a>
                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                    USA
                                </div>
                            </td>
                            <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                                <div className="flex items-center justify-center">
                                    <a className="flex items-center mr-3"
                                       href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round" className="stroke-1.5 w-4 h-4 mr-1">
                                            <polyline points="9 11 12 14 22 4"></polyline>
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                        </svg>
                                        Edit </a><a className="flex items-center text-danger" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="stroke-1.5 w-4 h-4 mr-1">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                    Delete </a>
                                </div>
                            </td>
                        </tr>
                        <tr className="intro-x">
                            <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                <div className="flex">
                                    <img src="https://joesnypizzalv.com/wp-content/uploads/2017/03/joes-white-truffle-mushroom-pizza.jpg" className="object-contain h-[50px] w-auto" />
                                </div>
                            </td>
                            <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                <a href="" className="font-medium whitespace-nowrap">Something</a>
                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                    USA
                                </div>
                            </td>
                            <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                                <div className="flex items-center justify-center">
                                    <a className="flex items-center mr-3"
                                       href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round" className="stroke-1.5 w-4 h-4 mr-1">
                                            <polyline points="9 11 12 14 22 4"></polyline>
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                        </svg>
                                        Edit </a><a className="flex items-center text-danger" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="stroke-1.5 w-4 h-4 mr-1">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                    Delete </a>
                                </div>
                            </td>
                        </tr>
                        <tr className="intro-x">
                            <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                <div className="flex">
                                    <img src="https://travel.usnews.com/dims4/USNEWS/c4c0c80/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-629986702_445x280_nEwR43I.jpg" className="object-contain h-[50px] w-auto" />
                                </div>
                            </td>
                            <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                <a href="" className="font-medium whitespace-nowrap">Something</a>
                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                    USA
                                </div>
                            </td>
                            <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                                <div className="flex items-center justify-center">
                                    <a className="flex items-center mr-3"
                                       href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round" className="stroke-1.5 w-4 h-4 mr-1">
                                            <polyline points="9 11 12 14 22 4"></polyline>
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                        </svg>
                                        Edit </a><a className="flex items-center text-danger" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="stroke-1.5 w-4 h-4 mr-1">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                    Delete </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListDatas;
