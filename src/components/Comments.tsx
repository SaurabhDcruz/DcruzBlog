'use client'

import React, { useState } from 'react'
import type { Comment, CommentReply } from '../types'
import AuthorAvatar from './AuthorAvatar'
import { MessageSquare, ThumbsUp } from 'lucide-react'

interface CommentsProps {
  comments: Comment[]
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState('')
  const [allComments, setAllComments] = useState<Comment[]>(comments)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyText, setReplyText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      author: {
        id: 'current-user',
        name: 'You',
        avatar: '/images/avatar-sarah.png',
        title: ''
      },
      text: newComment,
      date: new Date().toISOString(),
      likes: 0,
      replies: []
    }

    setAllComments([...allComments, comment])
    setNewComment('')
  }

  const handleLike = (commentId: string) => {
    setAllComments(
      allComments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    )
  }

  const handleReply = (commentId: string) => {
    setReplyingTo(replyingTo === commentId ? null : commentId)
    setReplyText('') // Clear the reply text when starting to reply
  }

  const submitReply = (commentId: string) => {
    if (!replyText.trim()) return

    const reply: CommentReply = {
      id: `reply-${Date.now()}`,
      author: {
        id: 'current-user',
        name: 'You',
        avatar: '/images/avatar-sarah.png',
        title: ''
      },
      text: replyText,
      date: new Date().toISOString(),
      likes: 0
    }

    setAllComments(
      allComments.map(comment =>
        comment.id === commentId
          ? { ...comment, replies: [...(comment.replies || []), reply] }
          : comment
      )
    )

    setReplyingTo(null)
    setReplyText('')
  }

  const handleReplyLike = (commentId: string, replyId: string) => {
    setAllComments(
      allComments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              replies: (comment.replies || []).map(reply =>
                reply.id === replyId
                  ? { ...reply, likes: reply.likes + 1 }
                  : reply
              )
            }
          : comment
      )
    )
  }

  return (
    <div className='mt-16'>
      <h3 className='text-2xl font-semibold mb-6'>
        Comments ({allComments.length})
      </h3>

      {/* New Comment */}
      <form onSubmit={handleSubmit} className='mb-10'>
        <div className='rounded-xl border border-gray-200 shadow-sm overflow-hidden'>
          <textarea
            placeholder='Share your thoughts...'
            className='w-full p-4 text-sm focus:outline-none resize-none'
            rows={4}
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
          <div className='bg-gray-50 px-4 py-3 rounded-lg flex justify-end'>
            <button
              type='submit'
              className={`px-3 py-2 md:px-6 md:py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
                newComment.trim()
                  ? 'bg-primary text-white shadow-lg hover:-translate-y-1 transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary.50'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed shadow-none'
              }`}
              disabled={!newComment.trim()}
            >
              Post Comment
            </button>
          </div>
        </div>
      </form>

      {/* List of Comments */}
      <div className='space-y-8'>
        {allComments.map(comment => (
          <div
            key={comment.id}
            className='bg-white p-5 rounded-xl border border-gray-100 shadow-sm'
          >
            <div className='flex items-start gap-4'>
              <AuthorAvatar author={comment.author} showTitle={false} />
              <div className='flex-1'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h4 className='font-medium'>{comment.author.name}</h4>
                    <span className='text-xs text-gray-400'>
                      {new Date(comment.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <p className='text-gray-700 mt-2'>{comment.text}</p>
                <div className='flex gap-4 mt-3 text-sm'>
                  <button
                    onClick={() => handleLike(comment.id)}
                    className='flex items-center gap-1 text-gray-500 hover:text-primary'
                  >
                    <ThumbsUp size={16} />
                    {comment.likes > 0 && <span>{comment.likes}</span>}
                  </button>
                  <button
                    onClick={() => handleReply(comment.id)}
                    className='flex items-center gap-1 text-gray-500 hover:text-primary'
                  >
                    <MessageSquare size={16} />
                    Reply
                  </button>
                </div>

                {/* Replies */}
                {(comment.replies || []).map(reply => (
                  <div key={reply.id} className='flex items-start gap-3'>
                    <AuthorAvatar author={reply.author} showTitle={false} />
                    <div className='flex-1'>
                      <div className='flex items-center justify-between'>
                        <h4 className='font-medium'>{reply.author.name}</h4>
                        <span className='text-xs text-gray-400'>
                          {new Date(reply.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className='text-gray-700 mt-1'>{reply.text}</p>
                      <button
                        onClick={() => handleReplyLike(comment.id, reply.id)}
                        className='mt-2 flex items-center gap-1 text-sm text-gray-500 hover:text-primary'
                      >
                        <ThumbsUp size={14} />
                        {reply.likes > 0 && <span>{reply.likes}</span>}
                      </button>
                    </div>
                  </div>
                ))}

                {/* Reply Form */}
                {replyingTo === comment.id && (
                  <div className='mt-5 pl-5'>
                    <div className='rounded-lg border border-gray-200 overflow-hidden'>
                      <textarea
                        rows={3}
                        className='w-full p-3 text-sm focus:outline-none resize-none'
                        placeholder='Write a reply...'
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                      />
                      <div className='bg-gray-50 px-3 py-2 flex justify-end gap-2'>
                        <button
                          onClick={() => setReplyingTo(null)}
                          className='px-3 py-1.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition'
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => submitReply(comment.id)}
                          className='px-3 py-1.5 text-xs bg-primary/90 text-white rounded hover:bg-primary transition'
                          disabled={!replyText.trim()}
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments