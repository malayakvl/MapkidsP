import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setActivePageAction} from "../../redux/layouts";

const VideoForm: React.FC<any> = ({ uploadedFiles, photos }) => {
    const dispatch = useDispatch();

    return (
        <>
            <h2 className="mt-10 text-lg font-medium intro-y">Add Video</h2>
            <Formik
                enableReinitialize
                initialValues={{url: '', code: ''}}
                validationSchema={SubmitSchema}
                onSubmit={(values) => {
                    // dispatch(setExistEmailAction(null));
                    // dispatch(changePasswordAction(values));
                }}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit} className="mt-5 w-full">
                        <div className="mb-3">
                            <InputText
                                icon={null}
                                label={"Video Url"}
                                name={"url"}
                                placeholder={"Video URL"}
                                style=""
                                props={props}
                                tips={null}
                            />
                        </div>
                        <div className="mb-3">
                            <InputTextarea
                                icon={null}
                                label={"Embed Code"}
                                name={"name"}
                                placeholder={"Embed Video Code"}
                                style=""
                                props={props}
                                tips={null}
                            />
                        </div>
                        <div className="mt-10 mb-7 block border border-gray-180 border-b-0" />
                        <button type="submit" className="btn bg-purple-900 text-white">
                            Save
                        </button>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Photos;
