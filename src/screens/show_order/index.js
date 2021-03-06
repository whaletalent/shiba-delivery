import React, { Component, Fragment } from 'react';
import { Box, Column, Title } from "rbx";
import WaitingImage from '../../assets/images/endOrder.png';
import "../../styles/show_order.scss";
 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadOrder } from "../../actions/order"; 
 
class ShowOrder extends Component {
  componentWillMount() {
    this.props.loadOrder(this.props.match.params.id);
  }
 
  render() {
 
    return (
      <Column.Group className="status_box">
        <Column size={4} offset={4} textAlign="centered">
          <Column.Group>
            <Column size={8} offset={2} textAlign="centered">
              <Box>         
                <img src={WaitingImage} className="status_img" alt="new"/>
                  { 
                    (this.props.order.status == 'waiting') ? (
                      <Fragment>
                        <Title size={4} className="has-text-custom-orange status_msg">
                          Pedido Efetuado
                        </Title>
                        <p className="status_description">Em breve, um Shiba entregador chegará em sua casa. Bom apetite e Volte Sempre!</p>
                      </Fragment>
                    ) : (
                      <Title size={4} className="has-text-custom-orange status_msg">
                        Pedido entregue
                      </Title>
                    )
                  }
              </Box>
            </Column>
          </Column.Group>
        </Column>
      </Column.Group>
    )
  } 
}
 
const mapStateToProps = store => ({
  order: store.orderState.order
});
 
const mapDispatchToProps = dispatch => bindActionCreators({ loadOrder }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(ShowOrder);