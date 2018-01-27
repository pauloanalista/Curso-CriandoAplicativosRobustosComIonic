import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { BadgesPage } from '../pages/badges/badges';
import { BotoesPage } from '../pages/botoes/botoes';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { DatetimePage } from '../pages/datetime/datetime';
import { FabPage } from '../pages/fab/fab';
import { GridPage } from '../pages/grid/grid';
import { IconesPage } from '../pages/icones/icones';
import { InputPage } from '../pages/input/input';
import { ListPage } from '../pages/list/list';
import { TogglePage } from '../pages/toggle/toggle';
import { LoadingPage } from '../pages/loading/loading';
import { ToastPage } from '../pages/toast/toast';
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { SegmentPage } from '../pages/segment/segment';
import { TabsPage } from '../pages/tabs/tabs';
import { SelectPage } from '../pages/select/select';
import { PaginaPrincipalPage } from '../pages/pagina-principal/pagina-principal';
import { Pagina1Page } from '../pages/pagina1/pagina1';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { ModalPrincipalPage } from '../pages/modal-principal/modal-principal';
import { ModalConteudoPage } from '../pages/modal-conteudo/modal-conteudo';
import { SlidesPage } from '../pages/slides/slides';
import { TypographyPage } from '../pages/typography/typography';
import { ChipsPage } from '../pages/chips/chips';
import { PopoverPage } from '../pages/popover/popover';
import { EstilizacaoPage } from '../pages/estilizacao/estilizacao';
import { CameraPage } from '../pages/camera/camera';
import { BarcodePage } from '../pages/barcode/barcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';
import { CepPage } from '../pages/cep/cep';
import { CepProvider } from '../providers/cep/cep';
import { HttpModule } from "@angular/http";
import { StoragePage } from '../pages/storage/storage';
import { AnimacaoPage } from '../pages/animacao/animacao';
import { PromocaoPage } from '../pages/promocao/promocao';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    DatetimePage,
    FabPage,
    GridPage,
    IconesPage,
    InputPage,
    ListPage,
    TogglePage,
    LoadingPage,
    ToastPage,
    ToolbarPage,
    SegmentPage,
    TabsPage,
    SelectPage,
    PaginaPrincipalPage,
    Pagina1Page,
    Pagina2Page,
    ModalPrincipalPage,
    ModalConteudoPage,
    SlidesPage,
    TypographyPage,
    ChipsPage,
    PopoverPage,
    EstilizacaoPage,
    CameraPage,
    BarcodePage,
    LocalizacaoPage,
    CepPage,
    StoragePage,
    AnimacaoPage,
    PromocaoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {mode: 'ios'}),
    //IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    DatetimePage,
    FabPage,
    GridPage,
    IconesPage,
    InputPage,
    ListPage,
    TogglePage,
    LoadingPage,
    ToastPage,
    ToolbarPage,
    SegmentPage,
    TabsPage,
    SelectPage,
    PaginaPrincipalPage,
    Pagina1Page,
    Pagina2Page,
    ModalPrincipalPage,
    ModalConteudoPage,
    SlidesPage,
    TypographyPage,
    ChipsPage,
    PopoverPage,
    EstilizacaoPage,
    CameraPage,
    BarcodePage,
    LocalizacaoPage,
    CepPage,
    StoragePage,
    AnimacaoPage,
    PromocaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    BarcodeScanner,
    Geolocation,
    CepProvider
  ]
})
export class AppModule { }
