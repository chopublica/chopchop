import React, { Component, PropTypes } from 'react';
import { Header, Image, Grid, Segment, Icon, Card } from 'semantic-ui-react'

import {
    Link
} from 'react-router-dom'

const propTypes = {

};
const defaultProps = {

};
class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const square = { width: 175, height: 175 }
        return(
            <div>
                <Grid centered doubling>
                    <Grid.Column width='8'>
                        <Image src='http://semantic-ui.com/images/wireframe/image.png' fluid shape='rounded' centered />
                        <br/>
                        <br/>
                        <br/>
                    </Grid.Column>
                </Grid>
                <Header as='h3' dividing>
                    이 구역의 네임드
                </Header>
                <Grid centered doubling columns={6}>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/15726806_1169155089848051_2754135665369198951_n.jpg?oh=23e6551a4143726e75a13e1269651a02&oe=59482A3A' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/15726806_1169155089848051_2754135665369198951_n.jpg?oh=23e6551a4143726e75a13e1269651a02&oe=59482A3A' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                </Grid>
                <Grid centered doubling columns={6}>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/15726806_1169155089848051_2754135665369198951_n.jpg?oh=23e6551a4143726e75a13e1269651a02&oe=59482A3A' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/15726806_1169155089848051_2754135665369198951_n.jpg?oh=23e6551a4143726e75a13e1269651a02&oe=59482A3A' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/15726806_1169155089848051_2754135665369198951_n.jpg?oh=23e6551a4143726e75a13e1269651a02&oe=59482A3A' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                </Grid>
                <Header as='h3' dividing>
                    인기 방
                </Header>
                    <Grid centered doubling columns={3}>
                        <Grid.Column>
                            <Card>
                              <Image src='http://taiwangolf.net/wp-content/uploads/2014/02/IMG_2740.jpg' />
                              <Card.Content>
                                <Card.Header>
                                  Matthew
                                </Card.Header>
                                <Card.Meta>
                                  <span className='date'>
                                    Joined in 2015
                                  </span>
                                </Card.Meta>
                                <Card.Description>
                                  Matthew is a musician living in Nashville.
                                </Card.Description>
                              </Card.Content>
                              <Card.Content extra>
                                <a>
                                  <Icon name='user' />
                                  22 Friends
                                </a>
                              </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                              <Image src='http://cfile21.uf.tistory.com/image/261E9738547B002823ACAD' />
                              <Card.Content>
                                <Card.Header>
                                  Matthew
                                </Card.Header>
                                <Card.Meta>
                                  <span className='date'>
                                    Joined in 2015
                                  </span>
                                </Card.Meta>
                                <Card.Description>
                                  Matthew is a musician living in Nashville.
                                </Card.Description>
                              </Card.Content>
                              <Card.Content extra>
                                <a>
                                  <Icon name='user' />
                                  22 Friends
                                </a>
                              </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                              <Image src='http://img.ezmember.co.kr/cache/board/2013/12/19/789dce9085553cf4ebb3cb9df8eb3034.jpg' />
                              <Card.Content>
                                <Card.Header>
                                  Matthew
                                </Card.Header>
                                <Card.Meta>
                                  <span className='date'>
                                    Joined in 2015
                                  </span>
                                </Card.Meta>
                                <Card.Description>
                                  Matthew is a musician living in Nashville.
                                </Card.Description>
                              </Card.Content>
                              <Card.Content extra>
                                <a>
                                  <Icon name='user' />
                                  22 Friends
                                </a>
                              </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid>
                <Header as='h3' dividing>
                    인기 리뷰
                </Header>
                <Grid celled>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={13}>
                      <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={13}>
                      <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={13}>
                      <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                    </Grid.Column>
                  </Grid.Row>
              </Grid>
            </div>
        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
