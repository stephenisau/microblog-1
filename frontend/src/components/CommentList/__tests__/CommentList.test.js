import React from 'react';
import { render } from '@testing-library/react';
import CommentList from '../CommentList';
import { Spinner } from 'react-bootstrap';


describe('<CommentList />', function () {
  beforeEach(() => {

  });

  afterEach(() => {

  });
  it("renders without crashing", () => {
    render(<CommentList />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<CommentList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders comment in commentlist", () => {

    const fakeComments = [
      { id: 107, text: "no" },
      { id: 108, text: "more" },
      { id: 109, text: "lies" },
    ]

    const { container } = render(<CommentList comments={fakeComments} />);
    const fakeCommentList = fakeComments.map(comment => comment.text)
    const randomComment = fakeCommentList[Math.floor(Math.random() * fakeCommentList.length)]
    expect(container.textContent).toContain(randomComment);
  })

})