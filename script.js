/**
 * 포트폴리오 프로젝트 데이터 (총 8개)
 * 추후 그누보드 연동 시 이 배열 부분을 PHP 게시판 출력 데이터로 교체하면 그대로 작동합니다.
 */
const projects = [
  {
    id: 1,
    title: '지에프기획',
    fullTitle: '지에프기획 반응형 웹사이트',
    client: '(주)지에프기획',
    launch: '2022',
    period: '1 Month (2022.05 - 2022.06)',
    type: 'UI/UX Design, Web Publishing',
    contrib: '50% (기획·디자인 전담 / 퍼블리싱 50%)',
    overview: [
      '(주)GF기획의 자사 홈페이지 리뉴얼 프로젝트입니다.',
      '"Something Special out of This world"라는 브랜드 슬로건에 맞춰 감각적인 서체 그래픽과 시원한 레이아웃을 구축하여 브랜드 고유의 특별함을 시각화했습니다.',
      '전체 UI/UX 디자인 설계를 전담하였으며, 서브 카테고리 페이지(3p)의 HTML/CSS 퍼블리싱을 직접 담당하여 실무 기여도 50%로 성공적으로 완료하였습니다.'
    ],
    thumb: 'images/thumb_01.jpg',
    detail: 'images/detail_01.jpg'
  },
  {
    id: 2,
    title: '프라이브 피부과',
    fullTitle: '프라이브 피부과 웹사이트 리뉴얼',
    client: '프라이브 피부과',
    launch: '2023 (중단 프로젝트)',
    period: '2 Month (2022.06 - 2022.08)',
    type: 'UI/UX Design, Web Publishing',
    contrib: '50% (기획·디자인 전담 / 퍼블리싱 50%)',
    overview: [
      '노후화된 피부과 홈페이지의 브랜드 가치를 높이고 직관적인 사용자 경험을 제공하기 위해 진행된 전체 디자인 리뉴얼 프로젝트입니다.',
      '메인 비주얼부터 서브 페이지까지 전반적인 UI/UX 시안 디자인을 주도적으로 작업하였으며, 서브 카테고리 퍼블리싱을 진행했습니다.',
      '작업 도중 클라이언트 측 사정으로 중도 계약 해지되어 최종 오픈에는 이르지 못하였으나, 초기 디자인 콘셉트 기획부터 완성도 높은 메인·서브 시안 도출까지 디자인 실무 프로세스를 집중적으로 경험한 프로젝트입니다.'
    ],
    thumb: 'images/thumb_02.jpg',
    detail: 'images/detail_02.jpg'
  },
  {
    id: 3,
    title: '로이스 치과병원',
    fullTitle: '치과병원 전 지점 통합 디자인 & 웹 관리',
    client: '로이스치과',
    launch: '2024',
    period: 'In-house (상주 근무)',
    type: 'Brand Identity, UI/UX, Graphic, Marketing Design',
    contrib: '100% (전 지점 디자인·웹 통합 관리)',
    overview: [
      '로이스치과병원 약 22개 전 지점의 온·오프라인 디자인을 혼자서 총괄 관리한 프로젝트입니다.',
      '웹 분야에서는 전 지점 공식 홈페이지 유지보수, 리뉴얼, 이벤트 팝업 제작을 전담하였고, 마케팅 영역에서는 SNS 콘텐츠와 인스타·페이스북 광고 소재를 제작했습니다.',
      '또한 버스 외부 광고, 팜플렛, 칫솔 굿즈, 명함 등 오프라인 홍보물까지 디자인 전반을 직접 도맡아 진행하며 대규모 지점의 브랜드 에셋을 안정적으로 운용했습니다.'
    ],
    thumb: 'images/thumb_03.jpg',
    detail: 'images/detail_03.jpg'
  },
  {
    id: 4,
    title: '치아노트',
    fullTitle: '치아노트 어플 UI/UX 디자인',
    client: '사내 신규 앱 기획 프로젝트',
    launch: '2025.2',
    period: '2 Days (2025.02.03 - 2025.02.05)',
    type: 'Mobile App UI/UX, Service Planning',
    contrib: '100% (기능 기획·UI/UX 디자인 전담)',
    overview: [
      '어린이의 올바른 양치 습관과 치아 건강 관리를 돕기 위해 기획된 모바일 애플리케이션 \'치아노트\'의 UI/UX 디자인 프로젝트입니다.',
      '별도의 기획서나 가이드가 없는 상태에서 시작하여, 어린이와 보호자 모두 쉽게 사용할 수 있는 핵심 기능을 직접 정의하고 전체 화면 흐름을 설계했습니다.',
      '처음 도전한 모바일 앱 UI/UX 디자인이었음에도 사용자 친화적인 인터페이스와 컬러·아이콘 톤앤매너를 정립하여, 3일이라는 짧은 기간 내에 앱의 핵심 방향성을 보여주는 메인 시안을 완성했습니다.'
    ],
    thumb: 'images/thumb_04.jpg',
    detail: 'images/detail_04.jpg'
  },
  {
    id: 5,
    title: '대출 플랫폼 리디자인',
    fullTitle: '대출 플랫폼 브랜드 리뉴얼',
    client: '사내 금융 서비스 플랫폼',
    launch: '2025',
    period: 'In-house (재직 기간 내 상주 진행)',
    type: 'Web & Mobile UI/UX, Brand Renewal',
    contrib: '100% (기획·디자인 전담 / 개발 협업)',
    overview: [
      '대출 서비스 플랫폼 운영 기간 동안, 주력 서비스의 모바일 반응형 브랜드 리뉴얼과 다수의 관련 웹사이트 리뉴얼 및 신규 사이트 오픈 준비를 총괄 전담한 프로젝트입니다.',
      '변화하는 금융 트렌드에 맞춰 복잡한 대출 정보를 직관적으로 전달할 수 있도록 각 사이트별 UI/UX 구조와 비주얼 톤앤매너를 새롭게 기획 및 디자인했습니다.',
      '특히 개발자와 원활하게 소통하며 디자인 의도가 웹상에 정확하게 구현되도록 조율하였고, 다수의 사이트 리뉴얼 및 신규 개설을 위한 실무 전반을 주도적으로 완수했습니다.'
    ],
    thumb: 'images/thumb_05.jpg',
    detail: 'images/detail_05.jpg'
  },
  {
    id: 6,
    title: '국장꾼',
    fullTitle: '국장꾼 쇼핑몰 UI/UX 디자인',
    client: '국장꾼',
    launch: '2025.07',
    period: '4 Days (2025.07.07 - 2025.07.10)',
    type: 'Mobile App UI/UX, BI/BX Design',
    contrib: '100% (브랜딩·UI/UX 디자인 전담)',
    overview: [
      '기존 네이버 스마트스토어 기반으로 운영되던 쇼핑몰을 독립된 자사몰과 모바일 앱으로 확장하기 위해 진행한 프로젝트입니다.',
      '클라이언트가 요청한 타사 쇼핑몰 레퍼런스를 바탕으로, 자사몰만의 브랜드 톤앤매너에 맞춰 전체 화면 구성과 레이아웃을 새롭게 재정비했습니다.',
      '모바일 앱은 물론 PC 환경에서도 모바일 화면 비율 그대로 일관되게 보이는 \'모바일 퍼스트(Mobile-First)\' 구조를 적용했습니다.'
    ],
    thumb: 'images/thumb_06.jpg',
    detail: 'images/detail_06.jpg'
  },
  {
    id: 7,
    title: '렛츠커피',
    fullTitle: '렛츠커피 상세페이지, 인쇄물 디자인',
    client: '렛츠커피',
    launch: '2025.11',
    period: '1 Months',
    type: 'Detail Page, E-Commerce, Print Design',
    contrib: '100% (기획·디자인·업로드 전담)',
    overview: [
      '원두 로스팅 브랜드 \'렛츠커피\'의 온라인 판매 활성화와 브랜드 이미지 통일을 위해 진행된 프로젝트입니다.',
      '제품의 특징과 원두 매력을 직관적으로 전달하는 온라인 상세페이지를 기획·디자인하였으며, 네이버 스마트스토어 상품 등록 및 페이지 업로드 관리까지 직접 도맡아 진행했습니다.',
      '또한 온라인뿐만 아니라 오프라인에서 활용되는 각종 인쇄 홍보물까지 함께 제작하여 브랜드의 온·오프라인 비주얼을 일관되게 구축했습니다.'
    ],
    thumb: 'images/thumb_07.jpg',
    detail: 'images/detail_07.jpg'
  },
  {
    id: 8,
    title: '대출온',
    fullTitle: '금융 플랫폼 \'대출온\' 신규 구축 디자인',
    client: '대출온',
    launch: '2025.12',
    period: '2 Months (2025.12~2026.01)',
    type: 'Mobile App UI/UX, BI/BX Design',
    contrib: '100% (로고·메뉴 설계·PC/모바일 디자인)',
    overview: [
      '신규 대출 서비스 플랫폼 \'대출온\'의 기획 초기 단계부터 참여하여 브랜드 아이덴티티 정립부터 웹·모바일 UI/UX 구축까지 전담한 프로젝트입니다.',
      '서비스의 핵심 가치와 신뢰감을 전달하는 로고(BI) 디자인을 시작으로, 사용자가 원하는 금융 상품을 쉽게 탐색할 수 있도록 전체 메뉴 구조(IA)를 직접 설계했습니다.',
      'PC 홈페이지부터 모바일 환경까지 일관된 사용자 경험을 제공하는 UI/UX 디자인을 100% 단독 작업하였으며, 개발자와 긴밀하게 소통하며 디자인 의도가 실제 서비스 화면에 정확히 구현되도록 조율했습니다.'
    ],
    thumb: 'images/thumb_08.jpg',
    detail: 'images/detail_08.jpg'
  }
];

// 상태 변수
let activeIndex = 0;
let isAnimating = false;
let modalCurrentIndex = 0;

// DOM 요소
const dialList = document.getElementById('dialList');
const photowallTrack = document.getElementById('photowallTrack');
const listContainer = document.getElementById('listContainer');
const currentIndexEl = document.getElementById('currentIndex');
const totalIndexEl = document.getElementById('totalIndex');
const scrollHint = document.getElementById('scrollHint');

// 모달 요소
const projectModal = document.getElementById('projectModal');
const modalIndexEl = document.getElementById('modalIndex');
const modalTitleEl = document.getElementById('modalTitle');
const modalSubEl = document.getElementById('modalSub');
const modalInfoHeader = document.getElementById('modalInfoHeader');
const modalDetailImg = document.getElementById('modalDetailImg');
const modalBody = document.getElementById('modalBody');

// 임시 이미지 fallback
function getFallbackSvg(label, isDetail = false) {
  const height = isDetail ? 1400 : 500;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="${height}" viewBox="0 0 800 ${height}">
    <rect width="100%" height="100%" fill="#ececec"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#777777">${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// 1. 초기 렌더링 (좌측 다이얼, 중앙 포토월, 리스트 뷰)
function initPortfolio() {
  totalIndexEl.textContent = String(projects.length).padStart(2, '0');

  projects.forEach((item, idx) => {
    // 좌측 다이얼 항목
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'dial-item-btn';
    btn.textContent = item.title;
    btn.addEventListener('click', () => goToSlide(idx));
    li.appendChild(btn);
    dialList.appendChild(li);

    // 중앙 포토월 카드 (일렬 세로 배치)
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.index = idx;
    card.innerHTML = `
      <span class="card-index">(${idx + 1})</span>
      <div class="project-card-inner">
        <img src="${item.thumb}" alt="${item.title}" onerror="this.onerror=null; this.src='${getFallbackSvg(item.title)}';" />
      </div>
    `;
    card.addEventListener('click', () => {
      if (idx === activeIndex) {
        openProjectModal(idx);
      } else {
        goToSlide(idx);
      }
    });
    photowallTrack.appendChild(card);

    // LIST 뷰 행 생성
    const row = document.createElement('div');
    row.className = 'list-row';
    row.innerHTML = `
      <span class="mono-caption">(${String(idx + 1).padStart(2, '0')})</span>
      <span class="list-row-title">${item.title}</span>
      <span class="list-row-role">${item.type}</span>
      <span class="list-row-year mono-caption">${item.launch}</span>
    `;
    row.addEventListener('click', () => openProjectModal(idx));
    listContainer.appendChild(row);
  });

  updateSlider(false);
}

// 2. 슬라이드 이동 및 중앙 정렬 계산
function goToSlide(index) {
  if (index < 0 || index >= projects.length || index === activeIndex) return;
  activeIndex = index;
  scrollHint.style.opacity = '0';
  updateSlider(true);
}

function updateSlider(animate = true) {
  const cards = document.querySelectorAll('.project-card');
  const dialBtns = document.querySelectorAll('.dial-item-btn');

  cards.forEach((card, i) => {
    card.classList.toggle('is-active', i === activeIndex);
  });

  dialBtns.forEach((btn, i) => {
    btn.classList.toggle('is-active', i === activeIndex);
  });

  currentIndexEl.textContent = String(activeIndex + 1).padStart(2, '0');

  photowallTrack.style.transition = animate
    ? 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
    : 'none';

  requestAnimationFrame(() => {
    const activeCard = cards[activeIndex];
    if (!activeCard) return;

    const viewportCenter = window.innerHeight / 2;
    const cardOffsetTop = activeCard.offsetTop;
    const cardHeight = activeCard.offsetHeight;
    const translateY = viewportCenter - (cardOffsetTop + cardHeight / 2);

    photowallTrack.style.transform = `translate3d(-50%, ${translateY}px, 0)`;
  });
}

// 3. 마우스 휠 스냅 스크롤
window.addEventListener(
  'wheel',
  (e) => {
    if (
      projectModal.classList.contains('is-open') ||
      infoModal.classList.contains('is-open') ||
      !document.getElementById('listView').classList.contains('is-hidden')
    ) {
      return;
    }

    e.preventDefault();
    if (isAnimating) return;
    if (Math.abs(e.deltaY) < 15) return;

    isAnimating = true;
    if (e.deltaY > 0) {
      goToSlide(Math.min(activeIndex + 1, projects.length - 1));
    } else {
      goToSlide(Math.max(activeIndex - 1, 0));
    }

    setTimeout(() => {
      isAnimating = false;
    }, 620);
  },
  { passive: false }
);

// 키보드 화살표 & ESC 지원
window.addEventListener('keydown', (e) => {
  if (projectModal.classList.contains('is-open')) {
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowRight') openProjectModal((modalCurrentIndex + 1) % projects.length);
    if (e.key === 'ArrowLeft') openProjectModal((modalCurrentIndex - 1 + projects.length) % projects.length);
    return;
  }
  if (infoModal.classList.contains('is-open')) {
    if (e.key === 'Escape') infoModal.classList.remove('is-open');
    return;
  }

  if (e.key === 'ArrowDown') goToSlide(Math.min(activeIndex + 1, projects.length - 1));
  if (e.key === 'ArrowUp') goToSlide(Math.max(activeIndex - 1, 0));
});

window.addEventListener('resize', () => updateSlider(false));

// 4. 상세 모달 팝업 열기 / 닫기 (상단 고정 다크 개요 헤더 렌더링)
function openProjectModal(index) {
  modalCurrentIndex = index;
  const item = projects[index];

  modalIndexEl.textContent = `(${String(index + 1).padStart(2, '0')})`;
  modalTitleEl.textContent = item.title;
  modalSubEl.textContent = `${item.type} · ${item.launch}`;

  const paragraphsHtml = item.overview.map((p) => `<p>${p}</p>`).join('');

  modalInfoHeader.innerHTML = `
    <div class="info-left-col">
      <h3 class="info-main-title">${item.fullTitle}</h3>
      <div class="info-meta-table">
        <span class="meta-label">CLIENT</span><span>${item.client}</span>
        <span class="meta-label">LAUNCH</span><span>${item.launch}</span>
        <span class="meta-label">PERIOD</span><span>${item.period}</span>
        <span class="meta-label">TYPE</span><span>${item.type}</span>
        <span class="meta-label">CONTRIB.</span><span>${item.contrib}</span>
      </div>
    </div>
    <div class="info-right-col">
      <div class="overview-heading">OVERVIEW</div>
      <div class="overview-paragraphs">${paragraphsHtml}</div>
    </div>
  `;

  modalDetailImg.src = item.detail;
  modalDetailImg.alt = `${item.title} 상세 시안`;
  modalDetailImg.onerror = function () {
    this.onerror = null;
    this.src = getFallbackSvg(`${item.title} 상세 시안 이미지 (images/detail_0${index + 1}.jpg)`, true);
  };

  modalBody.scrollTop = 0;
  projectModal.classList.add('is-open');
  projectModal.setAttribute('aria-hidden', 'false');
}

function closeProjectModal() {
  projectModal.classList.remove('is-open');
  projectModal.setAttribute('aria-hidden', 'true');
}

document.getElementById('modalCloseBtn').addEventListener('click', closeProjectModal);
document.getElementById('modalPrevBtn').addEventListener('click', () => {
  openProjectModal((modalCurrentIndex - 1 + projects.length) % projects.length);
});
document.getElementById('modalNextBtn').addEventListener('click', () => {
  openProjectModal((modalCurrentIndex + 1) % projects.length);
});
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) closeProjectModal();
});

// 5. 우측 LIST / GALLERY 뷰 전환 & 상단 메뉴(ABOUT, CONTACT, ARCHIVE)
const viewBtns = document.querySelectorAll('.view-btn');
const listView = document.getElementById('listView');

viewBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    viewBtns.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    if (btn.dataset.view === 'list') {
      listView.classList.remove('is-hidden');
    } else {
      listView.classList.add('is-hidden');
      updateSlider(false);
    }
  });
});

const infoModal = document.getElementById('infoModal');
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const page = link.dataset.page;
    if (page === 'archive') {
      document.querySelector('.view-btn[data-view="list"]').click();
      return;
    }
    document.getElementById('infoModalLabel').textContent = page.toUpperCase();
    infoModal.classList.add('is-open');
  });
});

document.getElementById('infoCloseBtn').addEventListener('click', () => {
  infoModal.classList.remove('is-open');
});
infoModal.addEventListener('click', (e) => {
  if (e.target === infoModal) infoModal.classList.remove('is-open');
});

document.getElementById('logoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.view-btn[data-view="gallery"]').click();
  goToSlide(0);
});


// 모바일 프로젝트 설명(INFO) 열기/닫기 토글
const modalInfoToggle = document.getElementById('modalInfoToggle');
if (modalInfoToggle) {
  modalInfoToggle.addEventListener('click', () => {
    const isExpanded = modalInfoHeader.classList.toggle('is-expanded');
    modalInfoToggle.textContent = isExpanded ? 'INFO ▲' : 'INFO ▼';
    modalInfoToggle.setAttribute('aria-expanded', String(isExpanded));
  });
}
modalInfoHeader.classList.remove('is-expanded');
  if (modalInfoToggle) {
    modalInfoToggle.textContent = 'INFO ▼';
    modalInfoToggle.setAttribute('aria-expanded', 'false');
  }
// 실행
initPortfolio();
