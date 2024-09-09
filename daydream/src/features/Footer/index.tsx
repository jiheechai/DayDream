import { FooterStyled } from "./styled";
import React, { useState } from "react";
import { Modal } from "antd";
const Footer = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [coockieModalOpen, setCoockieModalOpen] = useState(false);
  const [yeeyongModalOpen, setYeeyongModalOpen] = useState(false);
  //개인정보처리방침 모달
  const showPrivacyModal = () => {
    setPrivacyModalOpen(true);
  };
  const privacyHandleOk = () => {
    setPrivacyModalOpen(false);
  };
  const privacyHandleCancel = () => {
    setPrivacyModalOpen(false);
  };
  //쿠키 모달
  const showCoockieModal = () => {
    setCoockieModalOpen(true);
  };
  const coockieHandleOk = () => {
    setCoockieModalOpen(false);
  };
  const coockieHandleCancel = () => {
    setCoockieModalOpen(false);
  };
  //이용약관 모달
  const showYeeyongModal = () => {
    setYeeyongModalOpen(true);
  };
  const yeeyongHandleOk = () => {
    setYeeyongModalOpen(false);
  };
  const yeeyongHandleCancel = () => {
    setYeeyongModalOpen(false);
  };
  return (
    <>
      <FooterStyled>
        <div className="wrap1">
          <div className="Inc">© 2024 Baekilmong, Inc.</div>
          <div className="modalBox">
            <div className="gaeinJeongbo" onClick={showPrivacyModal}>
              개인정보 처리방침
            </div>
            <Modal
              title="개인정보 처리방침"
              open={privacyModalOpen}
              onOk={privacyHandleOk}
              onCancel={privacyHandleCancel}
            >
              <p>
                백일몽(이하 "회사")은 사용자의 개인정보를 중요하게 생각하며,
                개인정보 보호 관련 법령을 준수하고 있습니다.{" "}
              </p>
              <p>
                본 개인정보 처리방침은 회사가 제공하는 숙박중개 서비스(웹사이트
                및 모바일 애플리케이션 포함)를 이용하는 사용자(이하 "이용자")의
                개인정보가 어떻게 수집, 이용, 공유, 저장되는지에 대해
                설명합니다.
              </p>
              <p>
                백일몽(이하 "회사")은 사용자의 개인정보를 중요하게 생각하며,
                개인정보 보호 관련 법령을 준수하고 있습니다. 본 개인정보
                처리방침은 회사가 제공하는 숙박중개 서비스(웹사이트 및 모바일
                애플리케이션 포함)를 이용하는 사용자(이하 "이용자")의 개인정보가
                어떻게 수집, 이용, 공유, 저장되는지에 대해 설명합니다.
              </p>
              <p>
                {" "}
                1. 개인정보의 수집 항목 및 수집 방법 회사는 다음과 같은
                개인정보를 수집할 수 있습니다:{" "}
              </p>
              <p>
                1.1 수집하는 개인정보의 항목 필수 정보: 이름, 이메일 주소,
                비밀번호, 전화번호, 생년월일, 성별 선택 정보: 프로필 사진,
                선호하는 숙박 유형 서비스 이용 과정에서 자동으로 수집되는 정보:
                IP 주소, 쿠키 정보, 방문 일시, 서비스 이용 기록, 기기 정보(기기
                모델, OS 버전 등), 위치 정보 결제 정보: 신용카드 정보, 은행 계좌
                정보 (결제 과정에서 필요한 경우) 기타: 고객 문의, 리뷰 작성 시
                수집되는 정보{" "}
              </p>
              <p>
                1.2 개인정보 수집 방법 회원가입 및 서비스 이용 과정에서 이용자가
                자발적으로 제공 서비스 이용 과정에서 자동으로 수집 고객센터를
                통한 상담 과정에서 이용자가 제공 제휴사로부터의 제공{" "}
              </p>
              <p>
                2. 개인정보의 이용 목적 회사는 수집한 개인정보를 다음과 같은
                목적으로 이용합니다: 회원 관리: 회원제 서비스 이용에 따른 본인
                확인, 개인식별, 불량 회원의 부정 이용 방지, 가입 의사 확인, 연령
                확인 서비스 제공: 숙박 예약 및 결제 서비스 제공, 본인 인증, 예약
                정보 안내 마케팅 및 광고: 맞춤형 콘텐츠 제공, 서비스 이용에 대한
                통계 분석 및 신상품 안내, 이벤트 정보 제공 고객 지원: 고객 문의
                처리, 불만 처리, 공지사항 전달 법적 의무 준수: 법령, 법원 명령
                또는 정부 기관의 요구 사항 준수
              </p>
              <p>
                3. 개인정보의 공유 및 제공 회사는 이용자의 개인정보를 제3자에게
                제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다: 이용자가
                사전에 동의한 경우 법령의 규정에 의하거나, 법령에 의하여 필요한
                불가피한 사유가 있는 경우 서비스 제공을 위해 필요한 경우(예:
                숙박업체와의 예약 정보 공유){" "}
              </p>
              <p>
                4. 개인정보의 보유 및 이용 기간 회사는 원칙적으로 개인정보 수집
                및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                다만, 법령에서 정한 보존 기간이 있는 경우에는 해당 기간 동안
                개인정보를 안전하게 보관합니다. 회원 가입 정보: 회원 탈퇴 시까지
                결제 정보: 결제 및 서비스 제공에 필요한 기간 동안 보유 법령에
                따른 정보 보유: 전자상거래 등에서의 소비자 보호에 관한 법률,
                통신비밀보호법 등 관련 법령에서 정한 기간 동안 보관{" "}
              </p>
              <p>
                5. 개인정보의 파기 절차 및 방법 회사는 개인정보의 수집 및 이용
                목적이 달성되거나, 이용자의 요청이 있는 경우 개인정보를 지체
                없이 파기합니다. 파기 절차: 이용자가 입력한 정보는 목적 달성 후
                별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타
                관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후
                파기됩니다. 파기 방법: 전자적 파일 형태의 정보는 기록을 재생할
                수 없는 기술적 방법을 사용하여 삭제하며, 종이에 출력된
                개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.{" "}
              </p>
              <p>
                6. 이용자의 권리와 그 행사 방법 이용자는 언제든지 자신의
                개인정보를 조회하거나 수정할 수 있으며, 회원 탈퇴를 통해
                개인정보의 처리 정지를 요청할 수 있습니다. 개인정보 조회/수정:
                홈페이지 내 ‘회원정보 수정’을 통해 직접 조회 또는 수정 회원
                탈퇴: 고객센터를 통해 회원 탈퇴 신청 동의 철회: 개인정보
                관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이
                조치하겠습니다.{" "}
              </p>
            </Modal>
            <div className="cookie" onClick={showCoockieModal}>
              쿠키 정책
            </div>
            <Modal
              title="쿠키 정책"
              open={coockieModalOpen}
              onOk={coockieHandleOk}
              onCancel={coockieHandleCancel}
            >
              <p>쿠키 정책의 변경</p>
              <p>
                회사는 법령, 정책 또는 보안 기술의 변경에 따라 본 쿠키 정책을
                수정할 수 있습니다. 쿠키 정책의 변경 사항은 웹사이트를 통해
                공지됩니다. 이용자는 쿠키 정책 변경 공지를 확인하고, 변경된
                내용에 동의하지 않을 경우 쿠키 설정을 변경하거나 웹사이트 사용을
                중단할 수 있습니다.
              </p>
            </Modal>
            <div className="yeeyong" onClick={showYeeyongModal}>
              이용약관
            </div>
            <Modal
              title="이용약관"
              open={yeeyongModalOpen}
              onOk={yeeyongHandleOk}
              onCancel={yeeyongHandleCancel}
            >
              <p>
                백일몽(이하 "회사")의 서비스를 이용해 주셔서 감사합니다. 본
                이용약관은 회사가 제공하는 웹사이트 및 모바일 애플리케이션(이하
                "서비스")의 이용과 관련하여 회사와 사용자(이하 "이용자") 간의
                권리와 의무, 책임사항 및 이용 조건을 규정합니다. 이용자는 본
                약관을 숙지하고 준수해야 합니다.
              </p>
              <p>1. 약관의 적용 및 변경</p>
              <p>
                1.1 본 약관은 이용자가 서비스를 이용하는 데 적용됩니다. 이용자는
                서비스 이용 전에 본 약관의 내용을 숙지하고 동의해야 합니다.
              </p>
              <p>
                1.2 회사는 필요에 따라 약관을 개정할 수 있으며, 개정된 약관은
                서비스 내 공지사항을 통해 공지합니다. 이용자는 개정된 약관에
                동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.
                개정된 약관이 공지된 후에도 계속해서 서비스를 이용하는 경우,
                개정된 약관에 동의한 것으로 간주됩니다.
              </p>
              <p>2. 서비스의 제공</p>
              <p>
                2.1 회사는 이용자에게 숙박 시설의 정보 제공, 예약 및 결제 서비스
                등을 제공합니다.
              </p>
              <p>
                2.2 회사는 서비스의 품질 향상을 위해 서비스의 내용을 수정하거나
                추가할 수 있으며, 이 경우 사전에 서비스 내 공지사항을 통해
                알립니다.
              </p>
              <p>
                2.3 회사는 시스템 점검, 유지보수, 네트워크 장애 등 불가피한
                상황으로 인해 서비스의 일시적 제공 중단이 필요한 경우, 사전 공지
                후 서비스를 중단할 수 있습니다. 단, 긴급한 상황이 발생할 경우
                사전 공지 없이 서비스가 중단될 수 있습니다.
              </p>
            </Modal>
          </div>
        </div>
        <div className="wrap2">
          <div className="website">
            (주)백일몽 | 사업자 등록 번호: 644-87-01663 | 연락처:
            jjihee97@naver.com, 웹사이트, 070-7353-2750 | 호스팅 서비스
            제공업체: 아마존 웹서비스 | (주)백일몽은 통신판매 중개자로 백일몽
            플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의
            당사자가 아닙니다. 백일몽 플랫폼을 통하여 예약된 숙소, 체험, 호스트
            서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게
            있습니다.
          </div>
          <div className="copyright">
            Copyright © 2024. Baekilmong. All right reserved.
          </div>
        </div>
      </FooterStyled>
    </>
  );
};
export default Footer;
