declare namespace Images {
    interface Root {
        loading: boolean;
        isFetched: boolean;
        uploadedFiles: File[];
        checkedIds: number[];
        count: number;
        image: ImageItem;
        items: ImageItem[];
    }

    interface ImageItem {
        id: number;
        name: string;
        type: string;
        created_at: any;
        updated_at: any;
    }
}
