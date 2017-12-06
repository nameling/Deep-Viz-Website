import React, { Component } from 'react';
import './netLine.less';

export default class NetLine extends Component {
  componentDidMount() {
    // let ele = null;
    // let len = null;
    // for (let i = 0; i < 52; i++) {
    //   ele = document.querySelector(`#Shape${i}`);
    //   len = ele.getTotalLength();
    //   ele.style.transition = ele.style.WebkitTransition = 'none';
    //   ele.style.strokeDasharray = `${len} ${len}`;
    //   ele.style.strokeDashoffset = len;
    // }
  }
  render() {
    return (
      <svg
        className="svg-net"
        // width="1500px"
        // height="470px"
        viewBox="0 0 1500 470"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>网线2</title>
        <desc>Created with Sketch.</desc>
        <defs>
          <linearGradient
            x1="-3.13301869%"
            y1="-27.2383225%"
            x2="92.4167883%"
            y2="130.429934%"
            id="linearGradient-1"
          >
            <stop stopColor="#FF9A9F" offset="0%" />
            <stop stopColor="#2A51FB" offset="100%" />
          </linearGradient>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          opacity="0.505434783"
        >
          <g transform="translate(0.000000, -99.000000)" stroke="url(#linearGradient-1)">
            <g transform="translate(-35.000000, 0.000000)">
              <g transform="translate(35.000000, 0.000000)">
                <g>
                  <g>
                    <g transform="translate(-51.000000, 100.000000)">
                      <path
                        className="line-path"
                        d="M0,1.69487634 C18.1609195,1.69487634 418.399646,-18.6864084 530.159151,81.9050938 C641.918656,182.496596 278.001768,6.95456273 501.520778,18.7888571 C725.039788,30.6231515 638.426172,389.596748 945.76481,292.292549 C1253.10345,194.988351 1283.13882,-32.4930852 1580,141.076566"
                        id="Shape0"
                      />
                      <path
                        className="line-path "
                        d="M1,9.36061818 C18.9505769,9.22924514 414.352195,-13.6296646 527.224305,85.6883571 C535.815437,93.2423072 541.542858,99.2197807 545.035189,103.817837 C586.873304,158.92883 299.244994,13.6302421 502.638301,24.7312644 C725.029884,37.6715093 643.309359,391.327745 944.906989,294.111692 C1016.5696,270.333171 1068.04655,245.635039 1113.72623,216.732969 C1198.38031,163.198453 1261.80103,107.561969 1334.02241,89.0383698 C1398.49083,72.6824257 1472.52823,82.7324636 1581,143.689556"
                        id="Shape1"
                      />
                      <path
                        className="line-path"
                        d="M1,17.174007 C18.7418214,16.8459684 409.271441,-8.4786169 523.335986,89.5393374 C531.857648,96.8874036 537.585323,102.7921 541.147657,107.319033 C583.26702,161.314198 302.401415,18.8798081 502.730327,30.8204157 C724.083996,44.0731779 647.179487,393.106322 943.062776,295.941268 C1018.36074,269.894998 1066.90628,248.441269 1111.40053,219.245827 C1193.68347,165.250662 1260.11052,109.024834 1332.7542,92.36047 C1397.71441,77.4675144 1472.87268,87.9647518 1581,146.290027"
                        id="Shape2"
                      />
                      <path
                        className="line-path"
                        d="M1,26.0389499 C18.5299474,25.5805244 404.11895,-2.18696749 519.355656,94.475339 C527.876188,101.61368 533.603103,107.442234 537.164965,111.895511 C579.558105,164.679941 305.504266,25.515035 502.803474,38.0235042 C723.010343,51.9727395 650.935022,395.72643 941.19184,298.802166 C1020.04168,270.576248 1065.64748,252.370204 1109.08823,222.834499 C1188.98568,168.478324 1258.4769,111.764532 1331.52999,96.8984456 C1397.04031,83.604104 1473.23622,94.475339 1581,150.010323"
                        id="Shape3"
                      />
                      <path
                        className="line-path"
                        d="M2,35.0328387 C19.3204261,34.4426917 400.020599,4.08290744 516.444592,99.7522923 C524.965124,106.768484 530.622199,112.473239 534.253901,116.866555 C576.926402,168.668347 309.647085,32.3443913 503.943155,45.393197 C723.102418,60.0813 655.846086,399.678109 940.375989,302.566143 C1022.85753,272.009643 1065.4602,257.059252 1107.78349,227.027327 C1185.30637,172.143657 1257.87057,114.702683 1331.27286,101.653877 C1397.27207,89.9165091 1474.58542,101.129302 1582,154.17696"
                        id="Shape4"
                      />
                      <path
                        className="line-path"
                        d="M2,43.1108321 C19.1101485,42.388941 394.90488,9.51008194 512.510962,104.012192 C520.96128,110.837344 526.618105,116.48122 530.319484,120.812567 C573.269448,171.673077 312.776167,38.2544737 504.060644,51.839152 C722.092822,67.2613713 659.728076,402.546982 938.518741,305.354187 C1024.62818,272.540954 1064.22595,260.793817 1105.49982,230.343137 C1180.6448,174.954401 1256.27864,116.874979 1330.09671,105.587227 C1396.6517,95.4151249 1475.00919,107.031009 1582,157.497761"
                        id="Shape5"
                      />
                      <path
                        className="line-path"
                        d="M2,50.32727 C18.8998895,49.4079736 389.719779,14.0150654 508.647514,107.45497 C517.097459,114.087036 522.754033,119.734142 526.455249,123.936639 C569.682652,173.644305 315.904972,43.3012195 504.178122,57.3533204 C721.153149,73.572334 663.609724,404.387681 936.661657,307.139263 C1026.32884,272.009011 1062.99182,263.538352 1103.14652,232.676261 C1175.91381,176.796178 1254.61702,118.092541 1328.85083,108.571258 C1395.96155,99.9036071 1475.36309,111.920123 1582,159.85486"
                        id="Shape6"
                      />
                      <path
                        className="line-path"
                        d="M3,59.5872737 C19.6889115,58.5362134 385.51823,20.632353 505.692359,112.928582 C514.141557,119.366326 519.727803,124.950083 523.498519,129.088633 C566.931586,177.765861 320.01949,50.3904965 505.27339,64.9739575 C721.181818,81.9223042 668.391789,408.210822 935.833341,310.922058 C1029.12366,273.478036 1062.78079,268.288426 1101.88452,237.019383 C1172.27122,180.721968 1254.03991,121.402755 1328.6163,113.585494 C1396.20988,106.490838 1476.65183,118.906487 1583,164.167769"
                        id="Shape7"
                      />
                      <path
                        className="line-path"
                        d="M3,66.9655032 C19.4801556,65.7827935 380.297799,25.3078391 501.804031,116.442193 C510.183771,122.749978 515.840095,128.203584 519.541147,132.277362 C563.255458,179.91428 323.106073,55.5983488 505.295589,70.5793385 C720.096261,88.254278 672.19208,410.017025 933.919296,312.706298 C1030.84496,273.019817 1061.43101,271.048634 1099.48899,239.31259 C1167.50455,182.60823 1252.34942,122.618566 1327.3481,116.573605 C1395.50331,111.054293 1476.99629,123.801275 1583,166.510237"
                        id="Shape8"
                      />
                      <path
                        className="line-path"
                        d="M3,75.4598861 C19.269943,74.0757634 375.113846,31.0361396 497.871614,121.267755 C506.250983,127.397441 511.83723,132.802111 515.607946,136.822658 C559.599638,183.487365 326.234189,61.9482124 505.413046,77.4372042 C719.156804,95.9580837 676.072878,414.042655 932.062624,316.429051 C1032.54523,274.312176 1060.19715,275.696298 1097.20604,243.400103 C1162.77461,186.189699 1250.75799,125.288302 1326.10249,121.004113 C1394.81332,117.049477 1477.35011,130.231597 1583,170.437065"
                        id="Shape9"
                      />
                      <path
                        className="line-path"
                        d="M4,83.972732 C20.059749,82.4577374 370.790702,36.9420291 494.939544,125.931496 C503.248718,131.925606 508.834718,137.195152 512.675093,141.147312 C556.874315,186.72889 330.362029,68.3617004 506.530493,84.3020787 C719.21743,103.601793 680.953332,416.810466 931.206116,319.192116 C1035.31518,274.862056 1059.96341,279.538778 1095.85346,246.80172 C1159.04508,189.297794 1250.1667,127.709968 1325.85699,125.206934 C1395.12339,122.901507 1478.70391,136.338851 1584,173.950239"
                        id="Shape10"
                      />
                      <path
                        className="line-path"
                        d="M4,92.5954748 C19.8495736,90.9502766 365.53785,42.9104906 491.007822,130.632456 C499.316629,136.423553 504.902382,141.62238 508.742587,145.505047 C553.149322,189.991205 333.419771,74.8273347 506.578108,91.2135083 C718.208317,111.219118 684.763622,419.463443 929.349772,322.001905 C1037.08498,275.409893 1058.65995,283.43846 1093.5709,250.271266 C1154.38579,192.491906 1248.57554,128.526602 1324.6116,129.447913 C1394.43351,130.303416 1479.05767,142.543691 1584,177.421891"
                        id="Shape11"
                      />
                      <path
                        className="line-path"
                        d="M5,101.252783 C20.6394167,99.4783343 361.215643,49.0051289 488.076447,135.427349 C496.315068,141.013576 501.900574,146.139761 505.810429,149.95154 C550.494476,193.26123 337.547061,81.4052464 507.695537,98.2296482 C718.269112,118.997269 689.573575,422.165103 928.493593,324.76759 C1039.7848,276.003112 1058.35661,287.307007 1092.21874,253.658204 C1150.58727,195.627162 1247.91471,132.798536 1324.36633,133.718621 C1394.7437,134.572985 1480.4114,148.702854 1585,180.97153"
                        id="Shape12"
                      />
                      <path
                        className="line-path"
                        d="M5,107.991412 C20.4390438,106.023624 356.115991,53.2213057 484.448677,138.295351 C492.622288,143.739566 498.211082,148.724629 502.193098,152.463427 C547.113031,194.639688 340.886527,86.1489625 508.131192,103.334313 C717.780832,124.848798 693.888737,422.77194 927.220892,325.5632 C1042.21033,274.597485 1057.78909,289.224711 1090.62326,255.181974 C1146.65092,197.066627 1247.17936,133.57266 1323.95542,136.196377 C1394.9331,138.623316 1481.69913,153.119356 1586,182.701773"
                        id="Shape13"
                      />
                      <path
                        className="line-path"
                        d="M5,116.868305 C20.2205038,114.764651 350.533363,59.3465228 480.256739,143.361194 C488.425541,148.620328 493.941228,153.550767 497.99072,157.232161 C543.093681,198.450626 343.830756,92.8735042 507.904993,110.425865 C716.384004,132.777186 697.323464,426.697056 924.793195,329.271593 C1043.34556,275.957118 1055.84313,293.969653 1087.61069,259.325106 C1141.23155,200.817237 1244.77287,136.45858 1321.92267,140.797366 C1393.41715,144.873195 1481.17941,159.66451 1585,186.749052"
                        id="Shape14"
                      />
                      <path
                        className="line-path"
                        d="M6,124.714448 C21.0198842,122.484407 346.357563,64.7000959 477.624365,147.342811 C485.728116,152.458788 491.31691,157.246819 495.368786,160.854239 C540.707879,200.929397 348.173921,98.7410237 509.340772,116.646945 C716.894614,139.734434 702.643189,428.262452 924.588176,331.058878 C1046.84305,275.570198 1056.27414,296.952361 1087.0125,261.862001 C1138.28969,203.290617 1244.9658,138.225876 1322.51032,144.325696 C1394.67562,149.966389 1483.46759,165.117553 1587,189.516831"
                        id="Shape15"
                      />
                      <path
                        className="line-path"
                        d="M6,132.692764 C20.8089957,130.263023 340.948747,70.0448284 473.670879,151.53968 C481.70406,156.464832 487.292361,161.192978 491.413732,164.739088 C536.958379,203.811962 351.287103,104.652231 509.436001,122.973797 C715.923695,146.942871 706.423585,431.091319 922.690805,333.770311 C1048.49742,275.91619 1054.99381,300.738957 1084.68166,265.015187 C1133.64914,206.241704 1243.38939,140.244664 1321.27632,148.059239 C1393.99408,155.348464 1483.82601,170.846277 1587,192.582615"
                        id="Shape16"
                      />
                      <path
                        className="line-path"
                        d="M6,141.760185 C20.6000795,139.196478 335.514714,76.4185209 469.77956,156.748012 C477.813097,161.546746 483.331787,166.148271 487.523197,169.632284 C533.279427,207.693474 354.445917,111.65306 509.528102,130.387843 C714.977068,155.170346 710.29666,434.943106 920.845175,337.456498 C1050.2899,277.307984 1053.71288,305.508763 1082.35419,269.222446 C1128.9487,210.191446 1241.7675,143.337851 1320.00716,152.869583 C1393.28698,161.743954 1484.17073,177.586349 1587,196.781285"
                        id="Shape17"
                      />
                      <path
                        className="line-path"
                        d="M7,149.852152 C21.3886017,147.154207 331.022929,81.8771009 466.876474,161.038752 C474.839099,165.710803 480.426905,170.185444 484.61776,173.607227 C530.507621,210.654617 358.612724,117.674223 510.670908,136.757248 C715.04493,162.420627 715.184626,437.742613 919.977734,340.155972 C1053.03738,277.642615 1053.45646,309.359918 1081.04626,272.444135 C1125.32962,213.286758 1241.20676,145.443315 1319.78529,156.695719 C1393.61418,167.224284 1485.5336,183.411954 1588,199.994444"
                        id="Shape18"
                      />
                      <path
                        className="line-path"
                        d="M7,157.869232 C21.1784326,155.050004 325.560744,87.5852189 462.944867,165.212338 C470.837295,169.670652 476.424854,174.063403 480.685368,177.407138 C526.782735,213.270343 361.740193,123.841804 510.788346,143.18302 C714.105672,169.539525 719.064632,439.136411 918.191288,341.971385 C1054.80712,277.456955 1052.22288,312.467835 1078.76378,275.096671 C1120.74033,216.024008 1239.61566,147.575771 1318.53994,160.49177 C1392.92432,172.621007 1485.88735,189.011868 1588,202.976882"
                        id="Shape19"
                      />
                      <path
                        className="line-path"
                        d="M7,166.095322 C20.9688991,163.077995 320.043029,93.2203146 459.033575,169.571807 C466.856158,173.901016 472.443718,178.16463 476.774077,181.444333 C523.080977,216.274782 364.883195,130.018586 510.85819,149.631211 C713.127849,176.918343 722.836234,441.918369 916.235642,344.642369 C1056.48339,277.802016 1050.89583,316.305733 1076.38907,278.261174 C1116.06074,219.160921 1237.93939,149.696805 1317.28274,164.258688 C1392.22588,178.033442 1486.23657,194.759929 1588,206.042108"
                        id="Shape20"
                      />
                      <path
                        className="line-path"
                        d="M8,174.311151 C21.7587578,171.161773 315.511729,98.9229096 456.102487,173.983091 C463.924725,178.11665 469.442196,182.315821 473.842205,185.530811 C520.286743,219.321015 369.010249,136.256164 511.975615,156.202226 C713.188718,184.349794 727.715731,444.632783 915.449441,347.330118 C1059.32275,278.240633 1050.73225,320.166731 1075.1069,281.521235 C1112.47206,222.339169 1237.41834,152.003055 1317.03755,168.209231 C1392.53611,183.628062 1487.59027,200.621582 1589,209.347984"
                        id="Shape21"
                      />
                      <path
                        className="line-path"
                        d="M8,182.563342 C21.548635,179.28363 309.980917,104.702994 452.171747,178.430905 C459.923801,182.432153 465.510867,186.498995 469.910681,189.647518 C516.492844,222.379038 372.067188,142.550863 512.093029,162.819479 C712.249669,191.812128 731.594885,447.301644 913.59356,350.025404 C1061.02226,278.658885 1049.49894,324.115685 1072.82494,284.824742 C1107.95362,225.658749 1235.82759,154.357824 1315.86231,172.265048 C1391.91625,189.319547 1488.01378,206.636423 1589,212.736686"
                        id="Shape22"
                      />
                      <path
                        className="line-path"
                        d="M8,190.024745 C21.3397093,186.533759 304.406944,109.402744 448.280249,182.054759 C455.962804,185.94095 461.550117,189.958877 465.950126,192.988789 C512.743871,224.86873 375.156293,147.935318 512.115298,168.551892 C711.303,198.521671 735.398286,450.333686 911.747846,352.586098 C1062.81482,278.682598 1048.2878,327.753995 1070.49737,287.706465 C1103.39268,228.359715 1234.20564,155.7077 1314.5931,175.402127 C1391.20913,194.174406 1488.35853,211.826936 1589,215.383789"
                        id="Shape23"
                      />
                      <path
                        className="line-path"
                        d="M9,199.401854 C22.1290251,195.780957 299.79394,116.318744 445.33058,187.551648 C452.942621,191.304213 458.52944,195.188447 462.998896,198.150999 C509.928177,228.961534 379.266443,155.358588 513.210433,176.228118 C711.333009,207.104487 740.244799,453.917942 910.85229,356.285412 C1065.53735,280.114922 1048.0087,332.782504 1069.16878,292.030963 C1099.89629,232.714099 1233.63077,159.176988 1314.36031,180.507359 C1391.52825,200.916047 1489.7166,218.888859 1590,219.744707"
                        id="Shape24"
                      />
                      <path
                        className="line-path"
                        d="M9,207.746874 C21.9195194,203.996318 294.20712,122.339459 441.419807,192.086655 C448.962012,195.639814 454.548832,199.45617 459.088122,202.285537 C506.157074,232.092594 382.409029,161.753205 513.350104,182.874761 C710.425151,214.655795 744.155572,456.533805 909.036574,358.953531 C1067.28323,280.520835 1046.89134,336.713387 1066.86422,295.259865 C1095.42683,236.040548 1232.02456,161.490008 1313.10327,184.519742 C1390.8299,206.562488 1489.99594,224.788878 1590,223.078098"
                        id="Shape25"
                      />
                      <path
                        className="line-path"
                        d="M9,216.142131 C21.7100137,212.264216 288.550466,128.396101 437.509033,196.686831 C444.981404,200.104654 450.568223,203.785386 455.177349,206.545936 C502.385971,235.268793 385.551614,168.29261 513.419939,189.654003 C709.447458,222.320503 747.926675,459.136192 907.151023,361.596785 C1069.02911,281.015038 1045.70414,340.629756 1064.48982,298.564244 C1090.95737,239.541072 1230.34851,164.020332 1311.84624,188.668093 C1390.13154,212.329943 1490.34511,230.86506 1590,226.527054"
                        id="Shape26"
                      />
                      <path
                        className="line-path"
                        d="M10,224.554016 C22.4994037,220.483765 283.869617,134.614605 434.560753,201.248548 C441.962634,204.531008 447.618789,208.076066 452.227508,210.767683 C499.571618,238.471648 389.66066,174.857568 514.515039,196.324858 C709.477806,230.0029 752.77183,461.678946 906.325957,364.255525 C1071.82086,281.471877 1045.56513,344.626413 1063.23188,301.88878 C1087.60223,243.001443 1229.77421,166.520118 1311.61389,192.84545 C1390.45091,218.186043 1491.70306,236.896067 1591,230.0029"
                        id="Shape27"
                      />
                      <path
                        className="line-path"
                        d="M10,231.98069 C22.2899165,227.783456 278.213462,139.838275 430.650325,204.895411 C437.982377,208.043337 443.638532,211.45359 448.31708,214.076861 C495.800848,240.76865 392.802968,180.498985 514.584868,202.140976 C708.570028,236.636997 756.612429,463.222081 904.440572,365.898705 C1073.49675,280.970287 1044.37803,347.535804 1060.85769,304.186241 C1083.13317,245.490539 1228.09832,168.038445 1310.35696,195.976287 C1389.75262,222.930403 1492.05221,241.949122 1591,232.374181"
                        id="Shape28"
                      />
                      <path
                        className="line-path"
                        d="M10,240.657565 C22.0793623,236.316727 272.534117,145.948371 426.703087,209.679766 C433.964669,212.705199 439.620324,215.993712 444.368282,218.558753 C491.987502,244.3407 395.841364,187.186332 514.679945,209.087834 C707.600627,244.669552 760.456565,467.038847 902.546173,369.435761 C1075.21821,281.961297 1043.23932,352.33549 1058.53054,308.072096 C1078.77918,249.339241 1226.52444,170.612223 1309.12494,200.208847 C1389.07216,228.884686 1492.41006,248.221146 1591,236.053646"
                        id="Shape29"
                      />
                      <path
                        className="line-path"
                        d="M11,249.132477 C22.8698936,244.603232 267.808638,152.377316 423.862827,214.342629 C431.054586,217.230843 436.710242,220.381621 441.528022,222.875988 C489.217065,247.622728 400.053217,193.862568 515.889414,215.918018 C707.762752,252.414538 765.366648,469.490058 901.800601,372.078485 C1078.10343,282.543858 1043.33163,356.324591 1057.29621,311.425996 C1075.58981,252.939667 1225.98834,173.251224 1308.93795,204.496446 C1389.44376,234.82269 1493.829,254.383774 1592,239.614499"
                        id="Shape30"
                      />
                      <path
                        className="line-path"
                        d="M11,256.567034 C22.6599099,251.916598 262.072072,157.859894 419.934685,218.053565 C427.056306,220.804527 432.711712,223.882984 437.599099,226.240952 C485.425676,249.951625 403.177928,199.582819 515.936937,221.787013 C706.754505,259.252497 769.173423,470.94558 899.876126,373.67942 C1079.73198,282.046183 1042.16892,359.269619 1054.94595,313.747746 C1071.21396,255.519049 1224.32883,174.955159 1307.69369,207.770207 C1388.7545,239.668267 1494.18243,259.448994 1592,242.157233"
                        id="Shape31"
                      />
                      <path
                        className="line-path"
                        d="M12,264.333659 C23.4499448,259.541017 257.336012,163.22862 417.006889,221.922065 C424.058379,224.54817 429.783352,227.502538 434.670523,229.800379 C482.634621,252.581839 407.232546,205.443256 517.054272,227.830801 C706.816163,266.434543 774.04968,473.634219 899.091455,376.205728 C1082.56984,282.12552 1042.21577,363.075203 1053.66571,316.724452 C1068.04796,258.490575 1223.73928,176.687408 1307.44955,211.220687 C1389.06531,244.900483 1495.53584,264.990185 1593,244.966135"
                        id="Shape32"
                      />
                      <path
                        className="line-path"
                        d="M12,273.128679 C23.246611,268.225826 251.671568,170.364886 413.315406,227.041863 C420.300879,229.525975 426.028966,232.336944 430.988652,234.559571 C479.118559,256.262865 410.591072,212.660162 517.468804,235.01717 C706.286131,274.501477 778.376209,475.910665 897.757937,378.834182 C1084.96861,282.869013 1041.86824,367.067336 1051.99717,320.130693 C1064.50117,262.277031 1222.86184,179.778364 1307.03678,215.797988 C1389.18594,250.967785 1496.83207,271.29828 1594,248.745158"
                        id="Shape33"
                      />
                      <path
                        className="line-path"
                        d="M12,281.011625 C23.0375342,275.907231 245.953811,176.10979 409.42109,231.080184 C416.337013,233.436058 422.065354,236.119136 427.095116,238.278688 C475.297006,259.088908 413.752274,218.777286 517.560982,241.22353 C705.338779,281.862357 782.182372,478.512396 895.910889,381.332593 C1086.69257,282.974853 1040.93571,370.862042 1049.66793,323.155593 C1060.28632,265.371239 1221.23872,181.737711 1305.76667,219.431696 C1388.47832,256.340388 1497.17707,276.888845 1594,251.759522"
                        id="Shape34"
                      />
                      <path
                        className="line-path"
                        d="M13,289.905089 C23.8270046,284.664957 241.135465,182.940895 406.474302,236.128235 C413.319763,238.355291 419.047598,240.909855 424.146768,243.005908 C472.484105,262.852908 417.790268,225.844475 518.65604,248.442545 C705.369481,290.232598 787.026051,482.086931 895.01669,384.816981 C1089.41381,284.140944 1040.93677,375.64675 1048.34105,327.175528 C1057.14235,269.468575 1220.5952,184.709439 1305.53479,224.075931 C1388.79795,262.656403 1498.53488,283.551429 1595,255.77873"
                        id="Shape35"
                      />
                      <path
                        className="line-path"
                        d="M13,297.946207 C23.6174497,292.571844 235.337778,189.017056 402.56261,240.270122 C409.33822,242.367434 415.066054,244.857993 420.235076,246.824223 C468.642264,265.765573 420.933592,232.077497 518.795744,254.754684 C704.321706,297.749584 790.867891,484.606989 893.200548,387.278596 C1091.22995,284.248137 1040.09855,379.413676 1046.03594,330.192381 C1053.02111,272.581838 1218.98861,186.65758 1304.27746,227.75179 C1388.02958,268.059508 1498.88414,289.163712 1595,258.818227"
                        id="Shape36"
                      />
                      <path
                        className="line-path"
                        d="M13,306.889148 C23.4069757,301.316759 229.520971,196.031392 398.616865,245.3962 C405.322031,247.362925 411.04936,249.722996 416.28777,251.624164 C464.830375,269.65248 423.970773,239.299351 518.820927,262.047808 C703.352671,306.233573 794.710552,488.090118 891.306843,390.737209 C1092.88088,285.451841 1039.16971,384.181457 1043.70967,334.161074 C1048.87823,276.601577 1217.27567,189.672313 1303.04592,232.415812 C1387.3494,274.372621 1499.24185,295.809928 1595,262.768941"
                        id="Shape37"
                      />
                      <path
                        className="line-path"
                        d="M14,314.857945 C24.1974393,309.153955 224.653951,202.220527 395.705519,249.55709 C402.340839,251.392857 408.138013,253.622003 413.376424,255.45777 C462.05872,272.504178 428.043974,245.557741 519.960618,268.373702 C703.374834,313.808935 799.621898,490.567072 890.490861,393.140295 C1095.69687,285.551236 1039.40141,387.829683 1042.40477,337.149401 C1045.8272,279.71612 1216.66923,191.73043 1302.7887,236.05109 C1387.5811,279.71612 1500.59108,301.351945 1596,265.751178"
                        id="Shape38"
                      />
                      <path
                        className="line-path"
                        d="M14,321.884377 C23.9883439,316.048024 218.865822,207.518078 391.810853,252.700635 C398.376617,254.405638 404.174047,256.504102 409.412689,258.274681 C458.166983,274.406625 431.065742,250.864479 520.052806,273.619701 C702.357543,320.376106 803.428407,491.991133 888.643649,394.543701 C1097.49084,284.702215 1038.6085,390.477926 1040.07532,339.13113 C1041.75169,281.751249 1215.04596,192.763251 1301.58833,238.732733 C1386.94326,284.112022 1501.00596,306.014742 1596,267.783347"
                        id="Shape39"
                      />
                      <path
                        className="line-path"
                        d="M14,330.777145 C23.7783664,324.809511 213.059603,214.703388 387.882826,257.788393 C394.378455,259.362274 400.175629,261.395204 405.483885,263.034664 C454.375717,278.248852 434.190375,258.116285 520.100309,280.871987 C701.27947,328.94095 807.235055,495.378913 886.789051,397.92942 C1099.25898,285.790367 1037.79497,395.175128 1037.79497,343.105883 C1037.79497,285.724788 1213.45634,195.816811 1300.34411,243.426725 C1386.25404,290.446433 1501.35938,312.61193 1596,271.822169"
                        id="Shape40"
                      />
                      <path
                        className="line-path"
                        d="M15,338.745587 C24.5684076,332.584457 208.184054,221.159761 384.955145,261.993635 C391.380645,263.501146 397.177564,265.336376 402.555428,266.90943 C451.514944,281.263553 438.24489,264.484305 521.21765,287.228051 C701.271335,336.648181 812.111209,497.689638 885.934617,400.291346 C1101.95713,285.982717 1038.05134,398.718291 1036.44497,346.020964 C1034.69891,288.735562 1212.72716,197.891663 1300.1,247.115161 C1386.49503,295.814307 1502.71277,318.230334 1597,274.774703"
                        id="Shape41"
                      />
                      <path
                        className="line-path"
                        d="M15,347.675954 C24.3580541,341.385991 202.370591,228.625309 381.08149,267.085809 C387.436587,268.461738 393.232993,270.16527 398.680219,271.67224 C447.775085,285.103931 441.280316,271.73776 521.382466,294.473354 C700.233038,345.251697 816.021498,500.993791 884.111817,403.630412 C1103.74674,287.069544 1037.33249,403.30281 1034.18986,349.969169 C1030.76789,292.704302 1211.15486,200.975682 1298.86916,251.819546 C1385.74542,302.204766 1503.07028,324.809319 1597,278.813968"
                        id="Shape42"
                      />
                      <path
                        className="line-path"
                        d="M15,355.51455 C24.1485454,349.097539 196.574184,235.097366 377.170662,271.176686 C383.455922,272.4208 389.252329,274.057793 394.76939,275.432867 C444.003929,287.939491 444.35311,278.052055 521.452302,300.708034 C699.115658,352.960841 819.792654,503.236772 882.226239,405.933926 C1105.49265,287.153734 1036.63413,406.850641 1031.81543,352.895362 C1026.71739,295.666096 1209.47879,203.077789 1297.6121,255.527035 C1385.04706,307.517924 1503.34962,330.435822 1597,281.849878"
                        id="Shape43"
                      />
                      <path
                        className="line-path"
                        d="M16,363.377068 C24.9382476,356.770457 191.69243,241.710765 374.228206,275.332529 C380.443081,276.509944 386.308806,277.949008 391.825381,279.257248 C441.125403,290.900582 448.387729,284.359383 522.547252,306.991932 C699.007813,360.695177 824.63209,505.451913 881.403928,408.184282 C1108.21196,287.302923 1036.91547,410.277466 1030.56094,355.789277 C1023.85725,298.553785 1208.83708,205.210874 1297.38159,259.241179 C1385.29764,312.879011 1504.70704,335.969444 1598,284.882679"
                        id="Shape44"
                      />
                      <path
                        className="line-path"
                        d="M16,371.962799 C24.7283722,365.200371 185.889036,248.597738 370.302083,279.718036 C376.446857,280.76851 382.312323,282.081603 387.898482,283.329041 C437.335982,294.096401 451.371204,291.076288 522.664548,313.595828 C697.860434,369.13965 828.506709,508.852714 879.55023,411.289926 C1109.97925,287.662247 1036.24197,414.507003 1028.21186,359.2258 C1019.83263,301.712339 1207.17841,207.169663 1296.13798,263.041758 C1384.60876,318.58558 1505.06029,342.024285 1598,288.056174"
                        id="Shape45"
                      />
                      <path
                        className="line-path"
                        d="M16,379.77487 C24.5188912,372.891814 180.093397,255.35543 366.391773,283.87095 C372.46672,284.788691 378.332186,286.034196 383.988171,287.148596 C433.565325,297.047086 454.443591,297.440404 522.734375,319.859502 C696.673376,376.956095 832.347193,510.946261 877.664901,413.46907 C1111.72493,287.804125 1035.61352,417.861116 1025.90757,362.075582 C1015.92232,304.585672 1205.57239,209.337281 1294.88109,266.761638 C1383.84066,323.85823 1505.40943,347.522834 1598,291.081771"
                        id="Shape46"
                      />
                      <path
                        className="line-path"
                        d="M17,387.50717 C25.3094103,380.506164 175.297758,262.208802 363.481462,287.988205 C369.556409,288.838794 375.352048,289.885674 381.07786,290.932553 C430.794668,299.961887 458.446151,303.756825 523.874029,326.06844 C696.486317,384.824541 837.257504,512.936397 876.8494,415.642051 C1114.4706,287.922775 1035.98508,421.138168 1024.60328,364.933835 C1012.94218,307.420902 1204.89654,211.566015 1294.69403,270.452977 C1384.14239,329.143648 1506.82839,353.025582 1599,294.073191"
                        id="Shape47"
                      />
                      <path
                        className="line-path"
                        d="M17,396.924728 C25.0992144,389.704278 169.558478,270.23865 359.540913,293.212809 C365.545503,293.934854 371.34063,294.85382 377.135758,295.838427 C426.987819,304.043484 461.40948,311.329575 523.968929,333.581689 C695.169565,394.430391 841.025245,517.178043 875.027981,419.570686 C1116.25889,289.208741 1035.40639,426.200372 1022.3499,369.290097 C1009.08394,311.460856 1203.18581,214.641184 1293.46412,275.227324 C1383.32351,335.944745 1507.18563,359.969152 1599,298.267124"
                        id="Shape48"
                      />
                      <path
                        className="line-path"
                        d="M17,404.629716 C24.889752,397.298601 163.833172,277.382494 355.630947,297.412149 C361.565716,298.001257 367.430665,298.85219 373.225792,299.703123 C423.217495,307.034238 464.341954,317.769087 524.03875,339.82789 C693.773149,402.469656 844.86539,518.98203 873.142819,421.648378 C1118.00441,289.361013 1034.70818,429.372232 1019.97599,372.032434 C1005.10416,314.168985 1201.51011,216.900789 1292.20734,278.953447 C1382.6253,341.137018 1507.53473,365.421339 1599,301.20862"
                        id="Shape49"
                      />
                      <path
                        className="line-path"
                        d="M18,413.940024 C25.6799506,406.46276 159.101637,285.580319 352.706209,302.699319 C358.570899,303.22404 364.435589,303.87994 370.300278,304.66702 C420.42941,311.160434 468.324374,325.393472 525.156009,347.366135 C693.346926,412.234683 849.738647,523.016258 872.289774,425.483871 C1120.70127,290.696342 1035.10473,434.272936 1018.69756,376.356932 C1002.15076,318.178568 1200.92184,219.924691 1291.96416,283.809388 C1382.86685,347.759676 1508.88786,372.35594 1600,305.454101"
                        id="Shape50"
                      />
                      <path
                        className="line-path"
                        d="M18,422.332731 C25.684466,414.449734 161.210503,285.694111 366.595322,308.686186 C571.980141,331.678262 848.620918,557.657519 870.975728,428.244979 C1123.16593,290.949442 1035.14387,438.098726 1016.98058,379.633163 C998.817299,321.167599 1200.01059,221.973216 1291.5256,287.66486 C1383.0406,353.356505 1510.18358,378.31933 1601,308.686186"
                        id="Shape51"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}