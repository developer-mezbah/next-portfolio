const { create } = require("zustand");


export const useGalleryModel = create((set) => ({
    selectedImgUrl: [
        {
            key: "",
            url: ""
        }
    ],
    showModel: false,
    uniqueKey: "",
    setSelectImageUrl: (value) => set((state) => ({selectedImgUrl: [...state.selectedImgUrl, value]})),
    setShowModel: (value) => set((state) => ({showModel: state.showModel = value})),
    setUniqueKey: (value) => set((state) => ({uniqueKey: state.uniqueKey = value})),
}))