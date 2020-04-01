import React from 'react';
import { render } from '@testing-library/react';
import CommentList from '../CommentList';


describe('<CommentList />', function() {
  it ("renders without crashing", () => {
    render(<CommentList />);
  });
  
  it ("matches snapshot", () => {
    const { asFragment } = render(<CommentList />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it ("renders after making 'API call'", () => {
    const comments = [
      // {}
    ]
  });
})