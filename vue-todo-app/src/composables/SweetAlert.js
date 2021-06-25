import Swal from "sweetalert2";

export function generateAlert({
  text,
  icon,
  confirmButtonText,
  confirmButtonColor,
  timer,
}) {
  return Swal.fire({
    text: text || "successfully executed command",
    icon: icon || "success",
    confirmButtonText: confirmButtonText || "confirm",
    confirmButtonColor: confirmButtonColor || "rgba(72, 126, 176, 1)",
    timer: timer || 3000,
  });
}
// eslint-disable-next-line
                                                                                
