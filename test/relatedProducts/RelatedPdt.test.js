import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import RelatedPdt from '../../client/relatedProducts/RelatedPdt.jsx';
import App from '../../client/app.jsx';


test("renders users correctly", () => {
  const users = [{
    userId: 0,
    username: 'TestUser'
  }];
  const wrapper = shallow(
    <RelatedPdt
      users={users}
    />)
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find(".userLi").text()).toEqual("#0: TestUser");
})

test("Checking state", () => {
  const app = shallow(<App />);
  console.log(app.state('users')[0].userId);
  expect(app.state('users')[0].userId).toBe(1);
})

test("it should clone array", () => {
  const users = [{
    userId: 0,
    username: 'TestUser'
  }];
  const wrapper = shallow(
    <RelatedPdt
      users={users}
    />)
  expect(wrapper.instance().cloneArray([1,2,3])).toEqual([1,2,3]);
})

test("it should reverse string", () => {
  const users = [{
    userId: 0,
    username: 'TestUser'
  }];
  const wrapper = shallow(
    <RelatedPdt
      users={users}
    />)
  expect(wrapper.instance().reverseString('hello')).toEqual('olleh');
})