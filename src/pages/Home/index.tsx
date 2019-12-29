import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './flow/action';
import TYPES, { IHomePageProps } from './types';
import { IStoreState } from '../../global/types';
import Header from './components/Header';
import styles from './style.css';

const localImage = require( '@/assets/welearnmore.png' );
const onLineImage: string = 'https://img0.sc115.com/uploads3/sc/jpgs/1908/bpic12885_sc115.com.jpg';

class HomeComponent extends React.Component<TYPES.IHomePageProps, TYPES.IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);
    this.state = {
      name: ''
    }
  }

  public actionDataSync = (): void => {
    this.props.dataSync();
  }

  public actionDataAsync = (): void => {
    console.log( this )
    this.props.dataAsync( 'bart' );
  }

  public setName = (): void => {
    this.setState({
      name: 'bart'
    })
  }

  public render() {
    const { homePage, global } = this.props;
    const { syncId, asyncId } = homePage;
    const { globalSyncId, globalAsyncId } = global;
    const { name } = this.state;
    return (
      <div className={ styles['container'] }>
        <Header localImageSrc={ localImage } onLineImageSrc={ onLineImage } />
        <div>
          <button onClick={ this.actionDataSync }>dataSync action</button>
          <button onClick={ this.actionDataAsync }>dataAsync action</button>
          <button onClick={ this.setName }>setState name</button>
        </div>
        <div className={ styles['contents'] }>
          <p>
            syncId: { syncId }
          </p>
          <p>
            asyncId: { asyncId }
          </p>
          <p>
            setState name: { name }
          </p>
          <p>
            global Sync Id: { globalSyncId }
          </p>
          <p>
            global Async Id: { globalAsyncId }
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { homePage, global } = state;
  return {
    homePage,
    global
  }
}

const HomePage = connect(mapStateToProps, actions)(HomeComponent as any);

export default HomePage;