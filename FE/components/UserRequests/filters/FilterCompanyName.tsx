import React, { useState } from "react";
// import { useTranslations } from 'next-intl';
import { useDispatch, useSelector } from "react-redux";
import { paginationSelectorFactory } from "../../../redux/layouts/selectors";
import { PaginationType } from "../../../constants";
import { setPaginationAction } from "../../../redux/layouts";

const FilterCompanyName: React.FC<any> = () => {
  const dispatch = useDispatch();
  const { filters = {} }: Layouts.Pagination = useSelector(
    paginationSelectorFactory(PaginationType.USERREQUESTS)
  );
  const [nameSelected, setNameSelected] = useState<any>(filters.name);
  const [showBlock, setShowBlock] = useState<boolean>(true);

  const handleFocus = (e: any) => {
    e.target.select();
  };

  const clear = () => {
    setNameSelected("");
    dispatch(
      setPaginationAction({
        type: PaginationType.USERREQUESTS,
        modifier: {
          filters: {
            ...filters,
            company_name: "",
          },
          offset: 0,
        },
      })
    );
  };

  return (
    <>
      <div
        role="presentation"
        className="flex justify-between cursor-pointer border-b pb-3"
        onClick={() => setShowBlock(!showBlock)}
      >
        <div className="flex items-center">
          <span className="ml-2 text-xs font-bold text-blue-350">
            Company Name
          </span>
        </div>
      </div>
      <div className="mt-3 mb-4 pt-1 overflow-auto max-h-36 relative max-w-sm mx-auto">
        {showBlock && (
          <div className="relative">
            <input
              className="w-full form-control"
              type="text"
              placeholder={"Company Name"}
              onChange={(e) => {
                setNameSelected(e.target.value);
              }}
              onFocus={handleFocus}
              onKeyUp={() => {
                dispatch(
                  setPaginationAction({
                    type: PaginationType.USERREQUESTS,
                    modifier: {
                      filters: {
                        ...filters,
                        company_name: nameSelected,
                      },
                      offset: 0,
                    },
                  })
                );
              }}
              value={nameSelected}
            />
            <i
              role="presentation"
              className="input-close cursor-pointer"
              onClick={() => clear()}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FilterCompanyName;
