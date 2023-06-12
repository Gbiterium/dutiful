import Swal from 'sweetalert2'

/**
 * TOAST FUNCTION USING SWEETALERT
 * @param {*} title?: Pass the title {OPTIONAL} || Default = ' '
 * @param {*} message?: Pass the message {OPTIONAL} || Default = "Something went wrong"
 * @param {*} toastIcon? Pass the Icon {OPTIONAL} || Default = 'info''
 * @param {*} time? Pass the Time {OPTIONAL} || Default = 4000
 * @param {*} default Pass empty string {""} in the right order to activate the default values toast("", Something went wrong, "info", 4000)
 * ?? ICON-TYPES : error, info, success, warning, question
 * @returns ToastModal at the top right corner of the screen.
 */
const Toast = (
  title = '',
  message = 'Something went wrong',
  toastIcon = 'info',
  time = 5000
) => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: time || 4000,
    icon: toastIcon,
    title,
    text: message,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
}

export default Toast
