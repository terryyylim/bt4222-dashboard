import React,  { Component } from 'react'

// import styling components
import { Card, Table } from 'antd'

// import material-ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Tabs, Tab } from 'material-ui/Tabs'
import { blue50, blueA100, cyan500, deepOrange700 } from 'material-ui/styles/colors'

var styles = {
  default_tab:{
    color: blue50,
    backgroundColor: "#031528",
    fontWeight: 400,
  },
  active_tab:{
    color: deepOrange700,
  }
}

const facebookData = [
  {feature: 'page_likes', importance: '0.015524'}, {feature: 'page_followers', importance: '0.019355'}, {feature: 's8smartswitch', importance: '0.082005'},
  {feature: 'arrived', importance: '0.057717'}, {feature: 'galaxys8', importance: '0.031428'}, {feature: 'lgq6', importance: '0.027342'},
  {feature: 'x10', importance: '0.024414'}, {feature: 'lgv30sthinq', importance: '0.024231'}, {feature: 'lgg6', importance: '0.023181'},
  {feature: 'lg', importance: '0.023173'}, {feature: 'confident', importance: '0.022024'}, {feature: 'rio2016', importance: '0.020447'},
  {feature: 'technology', importance: '0.020298'}, {feature: '2co90vz', importance: '0.020090'}, {feature: 'galaxys7edge', importance: '0.019560'},
  {feature: 'mimix2s', importance: '0.018152'}, {feature: 'dowhatyoucant', importance: '0.017867'}, {feature: 'ly', importance: '0.017025'},
  {feature: 'unboxyourphone', importance: '0.016366'}
]

const instagramData = [
  {feature: 'n_followers', importance: '0.240859'}, {feature: 'n_posts', importance: '0.080333'}, {feature: 'meizu', importance: '0.031263'},
  {feature: 'gioneee7', importance: '0.023566'}, {feature: 'gioneestargima', importance: '0.021762'}, {feature: 'shotononeplus', importance: '0.021046'},
  {feature: 'xiaomipics', importance: '0.020230'}, {feature: 'selfieexpert', importance: '0.016168'}, {feature: 'htcone', importance: '0.015999'},
  {feature: 'htcgoesfullfrontal	', importance: '0.015874'}, {feature: 'mi', importance: '0.014010'}, {feature: 'selfiestan', importance: '0.013625'},
  {feature: 'motox', importance: '0.013557'}, {feature: 'fullvision', importance: '0.013013'}, {feature: 'moto360', importance: '0.012858'},
  {feature: 'lgg6', importance: '0.012745'}, {feature: 'ces2014', importance: '0.011979'}, {feature: 'flyme', importance: '0.011768'},
  {feature: 'htcrihanna', importance: '0.011635'}, {feature: '777tour', importance: '0.010911'}, {feature: 'taken', importance: '0.010123'},
  {feature: 'bea1', importance: '0.010054'}, {feature: 'selfieflash', importance: '0.009988'}, {feature: 'sony', importance: '0.009736'},
  {feature: 'g2', importance: '0.009658'}, {feature: 'tablet', importance: '0.009586'}, {feature: 'v20', importance: '0.009485'},
  {feature: 'oppon1', importance: '0.009658'}, {feature: 'motoxmade', importance: '0.009586'}, {feature: 'lounge', importance: '0.009485'},
  {feature: 'find5', importance: '0.009244'}, {feature: 'hewlettpackard', importance: '0.009183'}, {feature: 'oneplus5t', importance: '0.009024'},
  {feature: 'bio', importance: '0.008970'}, {feature: 'huaweimate10', importance: '0.008950'}, {feature: 'acer', importance: '0.008878'},
  {feature: 'p7max', importance: '0.008341'}, {feature: 'lgv30', importance: '0.008312'}, {feature: 'sonynex', importance: '0.008162'},
  {feature: 'yoga', importance: '0.007668'}, {feature: 'ces', importance: '0.006762'}, {feature: 'ifa15', importance: '0.006492'},
  {feature: 'gwatchr', importance: '0.006480'}, {feature: 'sonycamera', importance: '0.006359'}, {feature: 'u11', importance: '0.006299'},
  {feature: 'elifee6', importance: '0.006290'}, {feature: 'nyfw', importance: '0.006043'}, {feature: 'cute', importance: '0.005876'},
  {feature: 'mysuperg', importance: '0.005837'}, {feature: 'new', importance: '0.005394'}
]

const twitterData = [
  {feature: 'grow', importance: '0.085117'}, {feature: 'moments', importance: '0.048114'}, {feature: 'upgrade', importance: '0.033459'},
  {feature: 's7 s7', importance: '0.028416'}, {feature: 'phone ve', importance: '0.023716'}, {feature: 'introducing', importance: '0.021517'},
  {feature: 'singwithlg', importance: '0.017879'}, {feature: 'galaxys8 unboxyourphone', importance: '0.017769'}, {feature: 'anthem', importance: '0.014521'},
  {feature: 'new', importance: '0.014413'}, {feature: 'don miss', importance: '0.013717'}, {feature: 'lookin', importance: '0.013273'},
  {feature: 'resistant galaxy', importance: '0.013045'}, {feature: 'rules https', importance: '0.012941'}, {feature: 'galaxys7 galaxys7edge', importance: '0.012607'},
  {feature: 'mwc17 https', importance: '0.012489'}, {feature: 'mia1', importance: '0.012440'}, {feature: 'galaxy', importance: '0.012408'},
  {feature: 'phone', importance: '0.012216'}, {feature: 'galaxy s7', importance: '0.011769'}, {feature: 'galaxy https', importance: '0.011607'},
  {feature: 'people', importance: '0.011574'}, {feature: 'n_media', importance: '0.011199'}, {feature: 'dowhatyoucant', importance: '0.010622'},
  {feature: 'boundaries', importance: '0.010070'}, {feature: 'ideas possibilities', importance: '0.009968'}, {feature: 'reminders', importance: '0.009615'},
  {feature: 'saying', importance: '0.009545'}, {feature: 'look new', importance: '0.009372'}, {feature: 'dowhatyoucant rio2016', importance: '0.009139'},
  {feature: 'useful', importance: '0.009091'}, {feature: 'road', importance: '0.008906'}, {feature: 's7', importance: '0.008887'},
  {feature: 'easily', importance: '0.008639'}, {feature: 'super', importance: '0.008438'}, {feature: 'time', importance: '0.008426'},
  {feature: 'batman', importance: '0.008304'}, {feature: 'turn ideas', importance: '0.008168'}, {feature: 'music https', importance: '0.008163'},
  {feature: 'galaxys8', importance: '0.007902'}, {feature: 'proud', importance: '0.007887'}, {feature: 'galaxynote8', importance: '0.007842'},
  {feature: '2x', importance: '0.007575'}, {feature: 'livestream https', importance: '0.007262'}, {feature: '	mimix2', importance: '0.007238'},
  {feature: 'amp', importance: '0.007163'}, {feature: 'meet', importance: '0.007155'}, {feature: 'bigger', importance: '	0.007153'},
  {feature: 'galaxys8', importance: '0.007902'}, {feature: 'proud', importance: '0.007887'}, {feature: 'galaxynote8', importance: '0.007842'},
  {feature: 'smartphone', importance: '	0.006934'}, {feature: 'miss moment', importance: '0.006919'}
]

const columns = [{
  title: 'Feature',
  dataIndex: 'feature',
  key: 'feature',
}, {
  title: 'Importance',
  dataIndex: 'importance',
  key: 'importance',
}];

class InsightsDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "facebook",
      data: facebookData
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }

  handleChange(event, index, value) {
    this.setState({
      current: event
    })
    this.handleSelection(event);
  }

  handleSelection(event) {
    if (event === 'facebook') {
      this.setState({
        data: facebookData
      })
    } else if (event === 'instagram') {
      this.setState({
        data: instagramData
      })
    } else if (event === 'twitter') {
      this.setState({
        data: twitterData
      })
    }
  }

  render() {
    return(
      <div className="body-bg">
        <MuiThemeProvider>
          <div className="model-insights">
            <Tabs
              onChange={this.handleChange}
            >
              <Tab style={styles.default_tab} label="Facebook" value="facebook" />
              <Tab style={styles.default_tab} label="Instagram" value="instagram" />
              <Tab style={styles.default_tab} label="Twitter" value="twitter" />
            </Tabs>
            <Card>
              <Table dataSource={this.state.data} columns={columns} pagination={{ pageSize: 5 }} />
            </Card>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default InsightsDashboard;
