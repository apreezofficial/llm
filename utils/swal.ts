import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showSuccess = (title: string, text: string = '') => {
    return MySwal.fire({
        title,
        text,
        icon: 'success',
        confirmButtonColor: '#FF7D00',
        timer: 3000,
        timerProgressBar: true,
        customClass: {
            container: 'lms-swal-container',
            popup: 'lms-swal-popup',
            title: 'lms-swal-title',
            confirmButton: 'lms-swal-confirm-btn',
        },
    });
};

export const showError = (title: string, text: string = '') => {
    return MySwal.fire({
        title,
        text,
        icon: 'error',
        confirmButtonColor: '#0F172A',
        customClass: {
            container: 'lms-swal-container',
            popup: 'lms-swal-popup',
            title: 'lms-swal-title',
            confirmButton: 'lms-swal-confirm-btn',
        },
    });
};

export const showConfirm = (title: string, text: string = '') => {
    return MySwal.fire({
        title,
        text,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#FF7D00',
        cancelButtonColor: '#0F172A',
        confirmButtonText: 'Yes, proceed',
        customClass: {
            container: 'lms-swal-container',
            popup: 'lms-swal-popup',
            title: 'lms-swal-title',
            confirmButton: 'lms-swal-confirm-btn',
            cancelButton: 'lms-swal-cancel-btn',
        },
    });
};

export default MySwal;
