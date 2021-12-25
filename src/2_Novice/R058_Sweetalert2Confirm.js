import React, { Component } from "react";
import Swal from 'sweetalert2'


class R058_Sweetalert2Confirm extends Component {    

    deleteAlert = () => {
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4b088a',
            cancelButtonColor: '#01df01',
            confirmButtonText: '예',
            cancelButtonText: '아니오',
        }).then((result) => {
            if(result.isConfirmed){
                document.getElementById('deleteId').remove()
                Swal.fire('Deleted', 'sweetalert2 삭제 완료', 'success')
            }
        })
    }

    render() {
        return (
            <>
            <h1 id="deleteId">sweetalert2</h1>
            <button onClick={e => this.deleteAlert()}>삭제</button>
            </>
            
        )
    }
}

export default R058_Sweetalert2Confirm
