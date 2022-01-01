import React, { Component } from "react";

class R096_floatingPopulationList extends Component {    


    render() {

        return (
            <section className="sub_wrap">
                <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div className="li_top">
                        <h2 className="s_tit1">서울시 유동인구 데이터 - 19년 11월</h2>
                    </div>
                    <div className="list_cont list_cont_admin">
                        <table className="table_ty1 fp_tlist">
                            <thead>
                                <tr>
                                <th>ROW</th>
                                <th>일자</th>
                                <th>시간</th>
                                <th>연령대</th>
                                <th>성별</th>
                                <th>시</th>
                                <th>군구</th>
                                <th>유동 인구 수</th>
                                </tr>
                            </thead>
                            <tbody className="table_ty2 fp_tlist">
                                <tr className="hidden_type">
                                    <td>1</td>
                                    <td>20191101</td>
                                    <td>00</td>
                                    <td>40</td>
                                    <td>여성</td>
                                    <td>서울</td>
                                    <td>영등포구</td>
                                    <td>32670</td>
                                </tr>
                                <tr className="hidden_type">
                                    <td>1</td>
                                    <td>20191101</td>
                                    <td>00</td>
                                    <td>50</td>
                                    <td>남성</td>
                                    <td>서울</td>
                                    <td>구로구</td>
                                    <td>27888</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
            </section>
            
        )
    }
}

export default R096_floatingPopulationList
