import {Avatar} from "@mui/joy";

export default function Winning() {
    return (
        <>
            <div id="popup645paper" className="popup-645paper">
                <h2>인터넷 로또 6/45 구매번호</h2>
                <div className="date-info">
                    <h3><span>복권 로또 645</span><strong>제 1097회</strong></h3>
                    <ul>
                        <li><span>발 행 일</span> : 2023/12/07 (목) 13:51:15</li>
                        <li><span>추 첨 일</span> : 2023/12/09</li>
                        <li><span>지급 기한</span> : 2024/12/10</li>
                    </ul>
                </div>
                <div className="selected">
                    <ul>
                        <li>
                            <strong><span>A</span>
                                <span>수동(낙첨)</span>
                            </strong>
                            <div className="nums">
                                <span><span>2</span></span>
                                <span><span>7</span></span>
                                <span><span>12</span></span>
                                <span><span>19</span></span>
                                <span><span>32</span></span>
                                <span><span>36</span></span>
                            </div>
                        </li>
                        <li>
                            <strong><span>B</span>
                                <span>수동(낙첨)</span>
                            </strong>
                            <div className="nums">
                                <span><span>2</span></span>
                                <span><span>4</span></span>
                                <span><span>7</span></span>
                                <span><span>12</span></span>
                                <span><span>19</span></span>
                                <span><span>32</span></span>
                            </div>
                        </li>
                    </ul>
                    <div className="total">
                        <strong>당첨금액 합계</strong><strong><span className="won">\</span>0</strong>
                    </div>
                </div>
                <div className="btns">
                    <a className="btn_common mid" href="#">닫기</a>
                </div>
            </div>
            {/*<Avatar>1</Avatar>*/}
        </>
    )
};
