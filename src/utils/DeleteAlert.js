import Swal from "sweetalert2"; 
import client_api from "./api_fetch_fun";

export const DeleteAlert = (api) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return client_api.delete(api).then((res) => {
        return res
      })
    }
  });
};
