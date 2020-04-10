var app = angular.module("calculate", []);
app.controller("Ctrl",function ($scope){
    $scope.kpssaGenelYetenekDogru = 0;
    $scope.kpssaGenelKulturDogru = 0;
    $scope.kpssaEgitimDogru = 0;
    $scope.kpssaHukukDogru = 0;
    $scope.kpssaIktisatDogru = 0;
    $scope.kpssaIsletmeDogru = 0;
    $scope.kpssaMaliyeDogru = 0;
    $scope.kpssaMuhasebeDogru = 0;
    $scope.kpssaCalismaEkonomisiDogru = 0;
    $scope.kpssaCalismaEkonomisiDogru = 0;
    $scope.kpssaIstatistikDogru = 0;
    $scope.kpssaKamuyonetimiDogru = 0;
    $scope.kpssaUluslararasiDogru = 0;
    $scope.kpssaOabtDogru = 0;
    $scope.oogGenelYetenekDogru = 0;
    $scope.oogGenelKulturDogru = 0;
    $scope.onGenelYetenekDogru = 0;
    $scope.onGenelKulturDogru = 0;

    $scope.kpssaGenelYetenekYanlis= 0;
    $scope.kpssaGenelKulturYanlis = 0;
    $scope.kpssaEgitimYanlis = 0;
    $scope.kpssaHukukYanlis = 0;
    $scope.kpssaIktisatYanlis = 0;
    $scope.kpssaIsletmeYanlis = 0;
    $scope.kpssaMaliyeYanlis = 0;
    $scope.kpssaMuhasebeYanlis = 0;
    $scope.kpssaCalismaEkonomisiYanlis = 0;
    $scope.kpssaIstatistikYanlis = 0;
    $scope.kpssaKamuyonetimiYanlis = 0;
    $scope.kpssaUluslararasiYanlis = 0;
    $scope.kpssaOabtYanlis = 0;
    $scope.oogGenelYetenekYanlis= 0;
    $scope.oogGenelKulturYanlis = 0;
    $scope.onGenelYetenekYanlis= 0;
    $scope.onGenelKulturYanlis = 0;


    $scope.kpssaGenelYetenekNet = 0;
    $scope.kpssaGenelKulturNet = 0;
    $scope.kpssaEgitimNet = 0;
    $scope.kpssaHukukNet = 0;
    $scope.kpssaIktisatNet = 0;
    $scope.kpssaIsletmeNet = 0;
    $scope.kpssaMaliyeNet = 0;
    $scope.kpssaMuhasebeNet = 0;
    $scope.kpssaCalismaEkonomisiNet = 0;
    $scope.kpssaIstatistikNet = 0;
    $scope.kpssaKamuyonetimiNet = 0;
    $scope.kpssaUluslararasiNet = 0;
    $scope.kpssaOabtNet = 0;
    $scope.oogGenelYetenekNet = 0;
    $scope.oogGenelKulturNet = 0;
    $scope.onGenelYetenekNet = 0;
    $scope.onGenelKulturNet = 0;

    $scope.kpssp1 = 0;
    $scope.kpssp2 = 0;
    $scope.kpssp3 = 0;
    $scope.kpssp4 = 0;
    $scope.kpssp5 = 0;
    $scope.kpssp6 = 0;
    $scope.kpssp7 = 0;
    $scope.kpssp8 = 0;
    $scope.kpssp9 = 0;
    $scope.kpssp10 = 0;
    $scope.kpssp11 = 0;
    $scope.kpssp12 = 0;
    $scope.kpssp13 = 0;
    $scope.kpssp14 = 0;
    $scope.kpssp15 = 0;
    $scope.kpssp16 = 0;
    $scope.kpssp17 = 0;
    $scope.kpssp18 = 0;
    $scope.kpssp19 = 0;
    $scope.kpssp20 = 0;
    $scope.kpssp21 = 0;
    $scope.kpssp22 = 0;
    $scope.kpssp23 = 0;
    $scope.kpssp24 = 0;
    $scope.kpssp25 = 0;
    $scope.kpssp26 = 0;
    $scope.kpssp27 = 0;
    $scope.kpssp28 = 0;
    $scope.kpssp29 = 0;
    $scope.kpssp30 = 0;
    $scope.kpssp31 = 0;
    $scope.kpssp32 = 0;
    $scope.kpssp33 = 0;
    $scope.kpssp34 = 0;
    $scope.kpssp35 = 0;
    $scope.kpssp36 = 0;
    $scope.kpssp37 = 0;
    $scope.kpssp38 = 0;
    $scope.kpssp39 = 0;
    $scope.kpssp40 = 0;
    $scope.kpssp41 = 0;
    $scope.kpssp42 = 0;
    $scope.kpssp43 = 0;
    $scope.kpssp44 = 0;
    $scope.kpssp45 = 0;
    $scope.kpssp46 = 0;
    $scope.kpssp47 = 0;
    $scope.kpssp48 = 0;
    $scope.kpsspoabt = 0;
    $scope.kpssp93 = 0;
    $scope.kpssp94 = 0;

    $scope.alanlar = [
        {alan : "Ä°lkÃ–ÄŸretim Matematik", kod : 1},
        {alan : "Lise Matematik", kod : 2},
        {alan : "Fen ve Teknoloji", kod : 3},
        {alan : "TÃ¼rkÃ§e", kod : 4},
        {alan : "TÃ¼rk Dili ve EdebiyatÄ±", kod : 5},
        {alan : "Tarih", kod : 6},
        {alan : "CoÄŸrafya", kod : 7},
        {alan : "Fizik", kod : 8},
        {alan : "Kimya", kod : 9},
        {alan : "Biyoloji", kod : 10},
        {alan : "Ä°ngilizce", kod : 11},
        {alan : "Almanca", kod : 12},
        {alan : "Din KÃ¼ltÃ¼rÃ¼ ve Ahlak Bilgisi", kod : 13},
        {alan : "SÄ±nÄ±f Ã–ÄŸretmenliÄŸi", kod : 14},
        {alan : "Rehber Ã–ÄŸretmenliÄŸi", kod : 15}
    ];
    $scope.hesaplama = function(){
        /* NET HESAPLAMA*/

        if( $scope.kpssaGenelYetenekDogru + $scope.kpssaGenelYetenekYanlis > 60 || $scope.kpssaGenelYetenekDogru + $scope.kpssaGenelYetenekYanlis < 0){
            window.alert("0-60");
            $scope.kpssaGenelYetenekDogru = 0;
            $scope.kpssaGenelYetenekYanlis = 0;
            $scope.kpssaGenelYetenekNet = 0;
        }else{
            $scope.kpssaGenelYetenekNet = $scope.kpssaGenelYetenekDogru - ($scope.kpssaGenelYetenekYanlis/4);
        }

        if( $scope.kpssaGenelKulturDogru + $scope.kpssaGenelKulturYanlis > 60 || $scope.kpssaGenelKulturDogru + $scope.kpssaGenelKulturYanlis < 0){
            window.alert("0-60");
            $scope.kpssaGenelKulturDogru = 0;
            $scope.kpssaGenelKulturYanlis = 0;
            $scope.kpssaGenelKulturNet = 0;
        }else{
            $scope.kpssaGenelKulturNet = $scope.kpssaGenelKulturDogru - ($scope.kpssaGenelKulturYanlis/4);
        }
        if( $scope.oogGenelYetenekDogru + $scope.oogGenelYetenekYanlis > 60 || $scope.oogGenelYetenekDogru + $scope.oogGenelYetenekYanlis < 0){
            window.alert("0-60");
            $scope.oogGenelYetenekDogru = 0;
            $scope.oogGenelYetenekYanlis = 0;
            $scope.oogGenelYetenekNet = 0;
        }else{
            $scope.oogGenelYetenekNet = $scope.oogGenelYetenekDogru - ($scope.oogGenelYetenekYanlis/4);
        }

        if( $scope.oogGenelKulturDogru + $scope.oogGenelKulturYanlis > 60 || $scope.oogGenelKulturDogru + $scope.oogGenelKulturYanlis < 0){
            window.alert("0-60");
            $scope.oogGenelKulturDogru = 0;
            $scope.oogGenelKulturYanlis = 0;
            $scope.oogGenelKulturNet = 0;
        }else{
            $scope.oogGenelKulturNet = $scope.oogGenelKulturDogru - ($scope.oogGenelKulturYanlis/4);
        }
        if( $scope.onGenelYetenekDogru + $scope.onGenelYetenekYanlis > 60 || $scope.onGenelYetenekDogru + $scope.onGenelYetenekYanlis < 0){
            window.alert("0-60");
            $scope.onGenelYetenekDogru = 0;
            $scope.onGenelYetenekYanlis = 0;
            $scope.onGenelYetenekNet = 0;
        }else{
            $scope.onGenelYetenekNet = $scope.onGenelYetenekDogru - ($scope.onGenelYetenekYanlis/4);
        }

        if( $scope.onGenelKulturDogru + $scope.onGenelKulturYanlis > 60 || $scope.onGenelKulturDogru + $scope.onGenelKulturYanlis < 0){
            window.alert("0-60");
            $scope.onGenelKulturDogru = 0;
            $scope.onGenelKulturYanlis = 0;
            $scope.onGenelKulturNet = 0;
        }else{
            $scope.onGenelKulturNet = $scope.onGenelKulturDogru - ($scope.onGenelKulturYanlis/4);
        }
        if( $scope.kpssaOabtDogru + $scope.kpssaOabtYanlis > 50 || $scope.kpssaOabtDogru + $scope.kpssaOabtYanlis < 0){
            window.alert("0-50");
            $scope.kpssaOabtDogru = 0;
            $scope.kpssaOabtYanlis = 0;
            $scope.kpssaOabtNet = 0;
        }else{
            $scope.kpssaOabtNet = $scope.kpssaOabtDogru - ($scope.kpssaOabtYanlis/4);
        }
        if( $scope.kpssaOabtDogru + $scope.kpssaOabtYanlis > 50 || $scope.kpssaOabtDogru + $scope.kpssaOabtYanlis < 0){
            window.alert("0-50");
            $scope.kpssaOabtDogru = 0;
            $scope.kpssaOabtYanlis = 0;
            $scope.kpssaOabtNet = 0;
        }else{
            $scope.kpssaOabtNet = $scope.kpssaOabtDogru - ($scope.kpssaOabtYanlis/4);
        }
        if( $scope.kpssaEgitimDogru + $scope.kpssaEgitimYanlis > 80 || $scope.kpssaEgitimDogru + $scope.kpssaEgitimYanlis < 0){
            window.alert("0-80");
            $scope.kpssaEgitimDogru = 0;
            $scope.kpssaEgitimYanlis = 0;
            $scope.kpssaEgitimNet = 0;
        }else{
            $scope.kpssaEgitimNet = $scope.kpssaEgitimDogru - ($scope.kpssaEgitimYanlis/4);
        }

        if( $scope.kpssaHukukDogru + $scope.kpssaHukukYanlis > 40 || $scope.kpssaHukukDogru + $scope.kpssaHukukYanlis < 0){
            window.alert("0-40");
            $scope.kpssaHukukDogru = 0;
            $scope.kpssaHukukYanlis = 0;
            $scope.kpssaHukukNet = 0;
        }else{
            $scope.kpssaHukukNet = $scope.kpssaHukukDogru - ($scope.kpssaHukukYanlis/4);
        }

        if( $scope.kpssaIktisatDogru + $scope.kpssaIktisatYanlis > 40 || $scope.kpssaIktisatDogru + $scope.kpssaIktisatYanlis < 0){
            window.alert("0-40");
            $scope.kpssaIktisatDogru = 0;
            $scope.kpssaIktisatYanlis = 0;
            $scope.kpssaIktisatNet = 0;
        }else{
            $scope.kpssaIktisatNet = $scope.kpssaIktisatDogru - ($scope.kpssaIktisatYanlis/4);
        }
        if( $scope.kpssaIsletmeDogru + $scope.kpssaIsletmeYanlis > 40 || $scope.kpssaIsletmeDogru + $scope.kpssaIsletmeYanlis < 0){
            window.alert("0-40");
            $scope.kpssaIsletmeDogru = 0;
            $scope.kpssaIsletmeYanlis = 0;
            $scope.kpssaIsletmeNet = 0;
        }else{
            $scope.kpssaIsletmeNet = $scope.kpssaIsletmeDogru - ($scope.kpssaIsletmeYanlis/4);
        }
        if( $scope.kpssaMaliyeDogru + $scope.kpssaMaliyeYanlis > 40 || $scope.kpssaMaliyeDogru + $scope.kpssaMaliyeYanlis < 0){
            window.alert("0-40");
            $scope.kpssaMaliyeDogru = 0;
            $scope.kpssaMaliyeYanlis = 0;
            $scope.kpssaMaliyeNet = 0;
        }else{
            $scope.kpssaMaliyeNet = $scope.kpssaMaliyeDogru - ($scope.kpssaMaliyeYanlis/4);
        }
        if( $scope.kpssaMuhasebeDogru + $scope.kpssaMuhasebeYanlis > 40 || $scope.kpssaMuhasebeDogru + $scope.kpssaMuhasebeYanlis < 0){
            window.alert("0-40");
            $scope.kpssaMuhasebeDogru = 0;
            $scope.kpssaMuhasebeYanlis = 0;
            $scope.kpssaMuhasebeNet = 0;
        }else{
            $scope.kpssaMuhasebeNet = $scope.kpssaMuhasebeDogru - ($scope.kpssaMuhasebeYanlis/4);
        }

        if( $scope.kpssaCalismaEkonomisiDogru + $scope.kpssaCalismaEkonomisiYanlis > 40 || $scope.kpssaCalismaEkonomisiDogru + $scope.kpssaCalismaEkonomisiYanlis < 0){
            window.alert("0-40");
            $scope.kpssaCalismaEkonomisiDogru = 0;
            $scope.kpssaCalismaEkonomisiYanlis = 0;
            $scope.kpssaCalismaEkonomisiNet = 0;
        }else{
            $scope.kpssaCalismaEkonomisiNet = $scope.kpssaCalismaEkonomisiDogru - ($scope.kpssaCalismaEkonomisiYanlis/4);
        }
        if( $scope.kpssaIstatistikDogru + $scope.kpssaIstatistikYanlis > 40 || $scope.kpssaIstatistikDogru + $scope.kpssaIstatistikYanlis < 0){
            window.alert("0-40");
            $scope.kpssaIstatistikDogru = 0;
            $scope.kpssaIstatistikYanlis = 0;
            $scope.kpssaIstatistikNet = 0;
        }else{
            $scope.kpssaIstatistikNet = $scope.kpssaIstatistikDogru - ($scope.kpssaIstatistikYanlis/4);
        }
        if( $scope.kpssaKamuyonetimiDogru + $scope.kpssaKamuyonetimiYanlis > 40 || $scope.kpssaKamuyonetimiDogru + $scope.kpssaKamuyonetimiYanlis < 0){
            window.alert("0-40");
            $scope.kpssaKamuyonetimiDogru = 0;
            $scope.kpssaKamuyonetimiYanlis = 0;
            $scope.kpssaKamuyonetimiNet = 0;
        }else{
            $scope.kpssaKamuyonetimiNet = $scope.kpssaKamuyonetimiDogru - ($scope.kpssaKamuyonetimiYanlis/4);
        }
        if( $scope.kpssaUluslararasiDogru + $scope.kpssaUluslararasiYanlis > 40 || $scope.kpssaUluslararasiDogru + $scope.kpssaUluslararasiYanlis < 0){
            window.alert("0-40");
            $scope.kpssaUluslararasiDogru = 0;
            $scope.kpssaUluslararasiYanlis = 0;
            $scope.kpssaUluslararasiNet = 0;
        }else{
            $scope.kpssaUluslararasiNet = $scope.kpssaUluslararasiDogru - ($scope.kpssaUluslararasiYanlis/4);
        }


        //standart Puan hesaplama

        $scope.oogGenelYetenekst = (50+ 10*((($scope.oogGenelYetenekNet)-20.511)/8.766)).toFixed(2);
        $scope.oogGenelKulturst = (50+ 10*((($scope.oogGenelKulturNet)-24.010)/10.716)).toFixed(2);
        $scope.onGenelYetenekst = (50+ 10*((($scope.onGenelYetenekNet)-20.511)/8.766)).toFixed(2);
        $scope.onGenelKulturst = (50+ 10*((($scope.onGenelKulturNet)-24.010)/10.716)).toFixed(2);
        $scope.kpssaGenelYetenekst = (50+ 10*((($scope.kpssaGenelYetenekNet)-20.511)/8.766)).toFixed(2);
        $scope.kpssaGenelKulturst = (50+ 10*((($scope.kpssaGenelKulturNet)-24.010)/10.716)).toFixed(2);
        $scope.kpssaEgitimst = (50+ 10*((($scope.kpssaEgitimNet)-33.833)/12.499)).toFixed(2);
        $scope.kpssaHukukst = (50+ 10*((($scope.kpssaHukukNet)-9.035)/6.128)).toFixed(2);
        $scope.kpssaIktisatst = (50+ 10*((($scope.kpssaIktisatNet)-9.297)/6.006)).toFixed(2);
        $scope.kpssaIsletmest = (50+ 10*((($scope.kpssaIsletmeNet)-7.603)/3.959)).toFixed(2);
        $scope.kpssaMaliyest = (50+ 10*((($scope.kpssaMaliyeNet)-12.820)/7.630)).toFixed(2);
        $scope.kpssaMuhasebest = (50+ 10*((($scope.kpssaMuhasebeNet)-8.279)/6.122)).toFixed(2);
        $scope.kpssaCalismaEkonomisist = (50+ 10*((($scope.kpssaCalismaEkonomisiNet)-7.754)/4.236)).toFixed(2);
        $scope.kpssaIstatistikst = (50+ 10*((($scope.kpssaIstatistikNet)-2.411)/1.775)).toFixed(2);
        $scope.kpssaKamuYonetimist = (50+ 10*((($scope.kpssaKamuyonetimiNet)-11.264)/4.965)).toFixed(2);
        $scope.kpssaUluslararasist = (50+ 10*((($scope.kpssaUluslararasiNet)-6.250)/4.091)).toFixed(2);

        //AÄŸÄ±rlÄ±k puanÄ± hesaplama
        $scope.ap93 = (($scope.onGenelYetenekst*0.5) + ($scope.onGenelKulturst*0.5)).toFixed(2);
        $scope.ap94 = (($scope.oogGenelYetenekst*0.5) + ($scope.oogGenelKulturst*0.5)).toFixed(2);
        $scope.ap1 = (($scope.kpssaGenelYetenekst*0.7) + ($scope.kpssaGenelKulturst*0.3)).toFixed(2);
        $scope.ap2 = (($scope.kpssaGenelYetenekst*0.6) + ($scope.kpssaGenelKulturst*0.4)).toFixed(2);
        $scope.ap3 = (($scope.kpssaGenelYetenekst*0.5) + ($scope.kpssaGenelKulturst*0.5)).toFixed(2);
        $scope.ap4 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.2)+ ($scope.kpssaHukukst*0.6)).toFixed(2);
        $scope.ap5 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.15)+ ($scope.kpssaHukukst*0.5)+ ($scope.kpssaIktisatst*0.2)).toFixed(2);
        $scope.ap6 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.15)+ ($scope.kpssaHukukst*0.4)+ ($scope.kpssaKamuYonetimist*0.3)).toFixed(2);
        $scope.ap7 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.15)+ ($scope.kpssaHukukst*0.4)+ ($scope.kpssaUluslararasist*0.3)).toFixed(2);
        $scope.ap8 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.35)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaMaliyest*0.2)).toFixed(2);
        $scope.ap9 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.35)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaKamuYonetimist*0.15)).toFixed(2);
        $scope.ap10 = (($scope.kpssaGenelYetenekst*0.3) + ($scope.kpssaGenelKulturst*0.3)+ ($scope.kpssaEgitimst*0.4)).toFixed(2);
        $scope.ap11 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.35)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaUluslararasist*0.15)).toFixed(2);
        $scope.ap12 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.2)+ ($scope.kpssaIstatistikst*0.6)).toFixed(2);
        $scope.ap13 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaIktisatst*0.3)+ ($scope.kpssaIstatistikst*0.4)).toFixed(2);
        $scope.ap14 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.2)+ ($scope.kpssaIktisatst*0.6)).toFixed(2);
        $scope.ap15 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.15)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaIktisatst*0.5)).toFixed(2);
        $scope.ap16 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.10)+ ($scope.kpssaHukukst*0.15)+ ($scope.kpssaIktisatst*0.4)+ ($scope.kpssaMaliyest*0.2)).toFixed(2);
        $scope.ap17 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.15)+ ($scope.kpssaIktisatst*0.3)+ ($scope.kpssaMaliyest*0.2)+ ($scope.kpssaMuhasebest*0.15)).toFixed(2);
        $scope.ap18 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.15)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaIsletmest*0.15)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaMuhasebest*0.15)).toFixed(2);
        $scope.ap19 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.2)+ ($scope.kpssaMaliyest*0.6)).toFixed(2);
        $scope.ap20 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.15)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaMaliyest*0.5)).toFixed(2);
        $scope.ap21 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.10)+ ($scope.kpssaHukukst*0.15)+ ($scope.kpssaIktisatst*0.20)+ ($scope.kpssaMaliyest*0.4)).toFixed(2);
        $scope.ap22 = (($scope.kpssaGenelYetenekst*0.10) + ($scope.kpssaGenelKulturst*0.10)+ ($scope.kpssaHukukst*0.15)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaMaliyest*0.3)+ ($scope.kpssaMuhasebest*0.15)).toFixed(2);
        $scope.ap23 = (($scope.kpssaGenelYetenekst*0.10) + ($scope.kpssaGenelKulturst*0.10)+ ($scope.kpssaHukukst*0.15)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaIsletmest*0.15)+ ($scope.kpssaMaliyest*0.2)+ ($scope.kpssaMuhasebest*0.15)).toFixed(2);
        $scope.ap24 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.2)+ ($scope.kpssaIsletmest*0.6)).toFixed(2);
        $scope.ap25 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.15)+ ($scope.kpssaIsletmest*0.5)+ ($scope.kpssaMuhasebest*0.2)).toFixed(2);
        $scope.ap26 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.10)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaIsletmest*0.4)+ ($scope.kpssaMuhasebest*0.15)).toFixed(2);
        $scope.ap27 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.15)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaIsletmest*0.3)+ ($scope.kpssaMuhasebest*0.15)).toFixed(2);
        $scope.ap28 = (($scope.kpssaGenelYetenekst*0.10) + ($scope.kpssaGenelKulturst*0.10)+ ($scope.kpssaHukukst*0.15)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaIsletmest*0.2)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaMuhasebest*0.15)).toFixed(2);
        $scope.ap29 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.2)+ ($scope.kpssaKamuYonetimist*0.6)).toFixed(2);
        $scope.ap30 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.15)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaKamuYonetimist*0.5)).toFixed(2);
        $scope.ap31 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.25)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaKamuYonetimist*0.4)).toFixed(2);
        $scope.ap32 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.25)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaKamuYonetimist*0.3)).toFixed(2);
        $scope.ap33 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaKamuYonetimist*0.25)).toFixed(2);
        $scope.ap34 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.2)+ ($scope.kpssaUluslararasist*0.6)).toFixed(2);
        $scope.ap35 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.3)+ ($scope.kpssaUluslararasist*0.5)).toFixed(2);
        $scope.ap36 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.25)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaUluslararasist*0.4)).toFixed(2);
        $scope.ap37 = (($scope.kpssaGenelYetenekst*0.10) + ($scope.kpssaGenelKulturst*0.10)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaUluslararasist*0.3)).toFixed(2);
        $scope.ap38 = (($scope.kpssaGenelYetenekst*0.10) + ($scope.kpssaGenelKulturst*0.10)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaUluslararasist*0.25)).toFixed(2);
        $scope.ap39 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.2)+ ($scope.kpssaCalismaEkonomisist*0.6)).toFixed(2);
        $scope.ap40 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.3)+ ($scope.kpssaCalismaEkonomisist*0.5)).toFixed(2);
        $scope.ap41 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.25)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaCalismaEkonomisist*0.4)).toFixed(2);
        $scope.ap42 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaIktisatst*0.15)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaCalismaEkonomisist*0.3)).toFixed(2);
        $scope.ap43 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaMaliyest*0.15)+ ($scope.kpssaCalismaEkonomisist*0.25)).toFixed(2);
        $scope.ap44 = (($scope.kpssaGenelYetenekst*0.2) + ($scope.kpssaGenelKulturst*0.2)+ ($scope.kpssaMuhasebest*0.6)).toFixed(2);
        $scope.ap45 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.15)+ ($scope.kpssaIsletmest*0.2)+ ($scope.kpssaMuhasebest*0.5)).toFixed(2);
        $scope.ap46 = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaIsletmest*0.15)+ ($scope.kpssaMuhasebest*0.4)).toFixed(2);
        $scope.ap47 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.15)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaMaliyeNet*0.15)+ ($scope.kpssaMuhasebest*0.3)).toFixed(2);
        $scope.ap48 = (($scope.kpssaGenelYetenekst*0.1) + ($scope.kpssaGenelKulturst*0.1)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaIktisatst*0.2)+ ($scope.kpssaMaliyeNet*0.2)+ ($scope.kpssaMuhasebest*0.2)).toFixed(2);
        /*PUAN HESAPLAMA KPSS*/
        $scope.kpssp1 = (70 + 30*((2*($scope.ap1-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp2 = (70 + 30*((2*($scope.ap2-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp3 = (70 + 30*((2*($scope.ap3-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp4 = (70 + 30*((2*($scope.ap4-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp5 = (70 + 30*((2*($scope.ap5-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp6 = (70 + 30*((2*($scope.ap6-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp7 = (70 + 30*((2*($scope.ap7-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp8 = (70 + 30*((2*($scope.ap8-46.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp9 = (70 + 30*((2*($scope.ap9-46.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp10 = (70 + 30*((2*($scope.ap10-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp11 = (70 + 30*((2*($scope.ap11-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp12 = (70 + 30*((2*($scope.ap12-50.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp13 = (70 + 30*((2*($scope.ap13-50.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp14 = (70 + 30*((2*($scope.ap14-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp15 = (70 + 30*((2*($scope.ap15-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp16 = (70 + 30*((2*($scope.ap16-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp17 = (70 + 30*((2*($scope.ap17-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp18 = (70 + 30*((2*($scope.ap18-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp19 = (70 + 30*((2*($scope.ap19-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp20 = (70 + 30*((2*($scope.ap20-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp21 = (70 + 30*((2*($scope.ap21-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp22 = (70 + 30*((2*($scope.ap22-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp23 = (70 + 30*((2*($scope.ap23-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp24 = (70 + 30*((2*($scope.ap24-50.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp25 = (70 + 30*((2*($scope.ap25-50.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp26 = (70 + 30*((2*($scope.ap26-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp27 = (70 + 30*((2*($scope.ap27-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp28 = (70 + 30*((2*($scope.ap28-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp29 = (70 + 30*((2*($scope.ap29-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp30 = (70 + 30*((2*($scope.ap30-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp31 = (70 + 30*((2*($scope.ap31-45.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp32 = (70 + 30*((2*($scope.ap32-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp33 = (70 + 30*((2*($scope.ap33-45.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp34 = (70 + 30*((2*($scope.ap34-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp35 = (70 + 30*((2*($scope.ap35-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp36 = (70 + 30*((2*($scope.ap36-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp37 = (70 + 30*((2*($scope.ap37-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp38 = (70 + 30*((2*($scope.ap38-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp39 = (70 + 30*((2*($scope.ap39-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp40 = (70 + 30*((2*($scope.ap40-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp41 = (70 + 30*((2*($scope.ap41-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp42 = (70 + 30*((2*($scope.ap42-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp43 = (70 + 30*((2*($scope.ap43-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp44 = (70 + 30*((2*($scope.ap44-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp45 = (70 + 30*((2*($scope.ap45-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp46 = (70 + 30*((2*($scope.ap46-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp47 = (70 + 30*((2*($scope.ap47-45.584))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        $scope.kpssp48 = (70 + 30*((2*($scope.ap48-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);

        /*PUAN HESAPLAMA KPSS*/
        $scope.kpssp1 = (70 + 30*((2*($scope.ap1-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp1 > 100) {
            $scope.kpssp1 =100;
        }
        $scope.kpssp2 = (70 + 30*((2*($scope.ap2-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp2 > 100) {
            $scope.kpssp2 =100;
        }
        $scope.kpssp3 = (70 + 30*((2*($scope.ap3-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp3 > 100) {
            $scope.kpssp3 =100;
        }
        $scope.kpssp4 = (70 + 30*((2*($scope.ap4-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp4 > 100) {
            $scope.kpssp4 =100;
        }
        $scope.kpssp5 = (70 + 30*((2*($scope.ap5-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp5 > 100) {
            $scope.kpssp5 =100;
        }
        $scope.kpssp6 = (70 + 30*((2*($scope.ap6-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp6 > 100) {
            $scope.kpssp6 =100;
        }
        $scope.kpssp7 = (70 + 30*((2*($scope.ap7-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp7 > 100) {
            $scope.kpssp7 =100;
        }
        $scope.kpssp8 = (70 + 30*((2*($scope.ap8-46.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp8 > 100) {
            $scope.kpssp8 =100;
        }
        $scope.kpssp9 = (70 + 30*((2*($scope.ap9-46.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp9 > 100) {
            $scope.kpssp9 =100;
        }
        $scope.kpssp10 = (70 + 30*((2*($scope.ap10-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp10 > 100) {
            $scope.kpssp10 =100;
        }
        $scope.kpssp11 = (70 + 30*((2*($scope.ap11-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp11 > 100) {
            $scope.kpssp11 =100;
        }
        $scope.kpssp12 = (70 + 30*((2*($scope.ap12-50.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp12 > 100) {
            $scope.kpssp12 =100;
        }
        $scope.kpssp13 = (70 + 30*((2*($scope.ap13-50.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp13 > 100) {
            $scope.kpssp13 =100;
        }
        $scope.kpssp14 = (70 + 30*((2*($scope.ap14-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp14 > 100) {
            $scope.kpssp14 =100;
        }
        $scope.kpssp15 = (70 + 30*((2*($scope.ap15-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp15 > 100) {
            $scope.kpssp15 =100;
        }
        $scope.kpssp16 = (70 + 30*((2*($scope.ap16-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp16 > 100) {
            $scope.kpssp16 =100;
        }
        $scope.kpssp17 = (70 + 30*((2*($scope.ap17-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp17 > 100) {
            $scope.kpssp17 =100;
        }
        $scope.kpssp18 = (70 + 30*((2*($scope.ap18-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp18 > 100) {
            $scope.kpssp18 =100;
        }
        $scope.kpssp19 = (70 + 30*((2*($scope.ap19-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp19 > 100) {
            $scope.kpssp19 =100;
        }
        $scope.kpssp20 = (70 + 30*((2*($scope.ap20-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp20 > 100) {
            $scope.kpssp20 =100;
        }
        $scope.kpssp21 = (70 + 30*((2*($scope.ap21-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp21 > 100) {
            $scope.kpssp21 =100;
        }
        $scope.kpssp22 = (70 + 30*((2*($scope.ap22-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp22 > 100) {
            $scope.kpssp22=100;
        }
        $scope.kpssp23 = (70 + 30*((2*($scope.ap23-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp23 > 100) {
            $scope.kpssp23=100;
        }
        $scope.kpssp24 = (70 + 30*((2*($scope.ap24-50.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp24 > 100) {
            $scope.kpssp24 =100;
        }
        $scope.kpssp25 = (70 + 30*((2*($scope.ap25-50.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp25 > 100) {
            $scope.kpssp25 =100;
        }
        $scope.kpssp26 = (70 + 30*((2*($scope.ap26-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp26 > 100) {
            $scope.kpssp26 =100;
        }
        $scope.kpssp27 = (70 + 30*((2*($scope.ap27-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp27 > 100) {
            $scope.kpssp27 =100;
        }
        $scope.kpssp28 = (70 + 30*((2*($scope.ap28-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp28 > 100) {
            $scope.kpssp28 =100;
        }
        $scope.kpssp29 = (70 + 30*((2*($scope.ap29-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp29 > 100) {
            $scope.kpssp29 =100;
        }
        $scope.kpssp30 = (70 + 30*((2*($scope.ap30-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp30 > 100) {
            $scope.kpssp30 =100;
        }
        $scope.kpssp31 = (70 + 30*((2*($scope.ap31-45.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp31 > 100) {
            $scope.kpssp31 =100;
        }
        $scope.kpssp32 = (70 + 30*((2*($scope.ap32-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp32 > 100) {
            $scope.kpssp32 =100;
        }
        $scope.kpssp33 = (70 + 30*((2*($scope.ap33-45.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp33 > 100) {
            $scope.kpssp33 =100;
        }
        $scope.kpssp34 = (70 + 30*((2*($scope.ap34-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp34 > 100) {
            $scope.kpssp34 =100;
        }
        $scope.kpssp35 = (70 + 30*((2*($scope.ap35-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp35 > 100) {
            $scope.kpssp35 =100;
        }
        $scope.kpssp36 = (70 + 30*((2*($scope.ap36-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp36 > 100) {
            $scope.kpssp36 =100;
        }
        $scope.kpssp37 = (70 + 30*((2*($scope.ap37-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp37 > 100) {
            $scope.kpssp37 =100;
        }
        $scope.kpssp38 = (70 + 30*((2*($scope.ap38-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp38 > 100) {
            $scope.kpssp38 =100;
        }
        $scope.kpssp39 = (70 + 30*((2*($scope.ap39-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp39 > 100) {
            $scope.kpssp39 =100;
        }
        $scope.kpssp40 = (70 + 30*((2*($scope.ap40-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp40 > 100) {
            $scope.kpssp40 =100;
        }
        $scope.kpssp41 = (70 + 30*((2*($scope.ap41-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp41 > 100) {
            $scope.kpssp41 =100;
        }
        $scope.kpssp43 = (70 + 30*((2*($scope.ap43-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp43 > 100) {
            $scope.kpssp43 =100;
        }
        $scope.kpssp44 = (70 + 30*((2*($scope.ap44-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp44 > 100) {
            $scope.kpssp44 =100;
        }
        $scope.kpssp45 = (70 + 30*((2*($scope.ap45-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp45 > 100) {
            $scope.kpssp45 =100;
        }
        $scope.kpssp46 = (70 + 30*((2*($scope.ap46-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp46 > 100) {
            $scope.kpssp46 =100;
        }

        $scope.kpssp42 = (70 + 30*((2*($scope.ap42-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp42 > 70 && $scope.kpssp42 < 75) {
            $scope.kpssp42 = (71 + 30*((2*($scope.ap42-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp42 > 75 && $scope.kpssp42 < 80) {
            $scope.kpssp42 = (71.5 + 30*((2*($scope.ap42-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp42 > 80 && $scope.kpssp42 < 85) {
            $scope.kpssp42 = (72 + 30*((2*($scope.ap42-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp42 > 85 && $scope.kpssp42 < 90) {
            $scope.kpssp42 = (73 + 30*((2*($scope.ap42-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp42 > 90 && $scope.kpssp42 < 100) {
            $scope.kpssp42 = (73.5 + 30*((2*($scope.ap42-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }

        if ($scope.kpssp42 > 100) {
            $scope.kpssp42 =100;
        }
        $scope.kpssp47 = (70 + 30*((2*($scope.ap47-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp47 > 70 && $scope.kpssp47 < 75) {
            $scope.kpssp47 = (71 + 30*((2*($scope.ap47-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp47 > 75 && $scope.kpssp47 < 80) {
            $scope.kpssp47 = (71.5 + 30*((2*($scope.ap47-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp47 > 80 && $scope.kpssp47 < 85) {
            $scope.kpssp47 = (72 + 30*((2*($scope.ap47-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp47 > 85 && $scope.kpssp47 < 90) {
            $scope.kpssp47 = (73 + 30*((2*($scope.ap47-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp47 > 90 && $scope.kpssp47 < 100) {
            $scope.kpssp47 = (73.5 + 30*((2*($scope.ap47-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }
        if ($scope.kpssp47 > 100) {
            $scope.kpssp47 = 100;
        }
        $scope.kpssp48 = (70 + 30*((2*($scope.ap48-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp48 > 70 && $scope.kpssp48 < 75) {
            $scope.kpssp48 = (71 + 30*((2*($scope.ap48-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp48 > 75 && $scope.kpssp48 < 80) {
            $scope.kpssp48 = (71.5 + 30*((2*($scope.ap48-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp48 > 80 && $scope.kpssp48 < 85) {
            $scope.kpssp48 = (72 + 30*((2*($scope.ap48-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp48 > 85 && $scope.kpssp48 < 90) {
            $scope.kpssp48 = (73 + 30*((2*($scope.ap48-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }else  if ($scope.kpssp48 > 90 && $scope.kpssp48 < 100) {
            $scope.kpssp48 = (73.5 + 30*((2*($scope.ap48-43.847))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        }
        if ($scope.kpssp48 > 100) {
            $scope.kpssp48 = 100;
        }
        $scope.kpssp93 = (65 + 30*((2*($scope.ap93-45.584))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp93 > 100) {
            $scope.kpssp93=100;
        }
        $scope.kpssp94 = (65 + 30*((2*($scope.ap94-45.584))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
        if ($scope.kpssp94 > 100) {
            $scope.kpssp94=100;
        }

        if($scope.selectedAlan.kod == 1){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-8.541)/7.125)).toFixed(2);
        }else if($scope.selectedAlan.kod == 2){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-9.459)/6.458)).toFixed(2);
        }else if($scope.selectedAlan.kod == 3){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-8.511)/7.852)).toFixed(2);
        }else if($scope.selectedAlan.kod == 4){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-7.476)/8.459)).toFixed(2);
        }else if($scope.selectedAlan.kod == 5){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-12.752)/8.128)).toFixed(2);
        }else if($scope.selectedAlan.kod == 6){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-8.412)/7.752)).toFixed(2);
        }else if($scope.selectedAlan.kod == 7){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-7.685)/6.766)).toFixed(2);
        }else if($scope.selectedAlan.kod == 8){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-9.876)/8.523)).toFixed(2);
        }else if($scope.selectedAlan.kod == 9){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-11.423)/7.127)).toFixed(2);
        }else if($scope.selectedAlan.kod == 10){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-13.147)/9.523)).toFixed(2);
        }else if($scope.selectedAlan.kod == 11){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-12.567)/7.891)).toFixed(2);
        }else if($scope.selectedAlan.kod == 12){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-11.238)/6.452)).toFixed(2);
        }else if($scope.selectedAlan.kod == 13){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-8.057)/8.295)).toFixed(2);
        }else if($scope.selectedAlan.kod == 14){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-12.857)/8.348)).toFixed(2);
        }else if($scope.selectedAlan.kod == 15){
            $scope.kpssaOabtst = (50+ 10*((($scope.kpssaOabtNet)-10.108)/7.628)).toFixed(2);
        }
        $scope.oabt = (($scope.kpssaGenelYetenekst*0.15) + ($scope.kpssaGenelKulturst*0.15)+ ($scope.kpssaHukukst*0.2)+ ($scope.kpssaOabtst*0.5)).toFixed(2);
        $scope.kpsspoabt = (70 + 30*((2*($scope.oabt-49.992))-8.525)/ ((2*(86.150-50))-8.525)).toFixed(3);
    }
});