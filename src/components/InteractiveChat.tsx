import React, { useState, useEffect } from 'react';
import { MessageCircle, ThumbsUp, Send, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  likes: number;
  avatar: string;
}

export function InteractiveChat() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', message: '' });
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  // Mock initial comments for demo
  useEffect(() => {
    const mockComments: Comment[] = [
      {
        id: '1',
        name: 'Sarah Johnson',
        message: 'Amazing portfolio! Love your UI/UX design projects, especially GetKom. The design system is really well thought out! 🎨',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        likes: 5,
        avatar: '👩‍💼',
      },
      {
        id: '2',
        name: 'David Chen',
        message: 'Your blockchain projects are impressive! Would love to collaborate on a Web3 project sometime.',
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        likes: 3,
        avatar: '👨‍💻',
      },
      {
        id: '3',
        name: 'Anika Sharma',
        message: 'The n8n AI Telegram Bot integration looks very interesting! How long did it take to build? 🤖',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        likes: 2,
        avatar: '👩‍🔬',
      },
    ];

    // Load from localStorage or use mock data
    const stored = localStorage.getItem('portfolio-comments');
    if (stored) {
      setComments(JSON.parse(stored));
    } else {
      setComments(mockComments);
      localStorage.setItem('portfolio-comments', JSON.stringify(mockComments));
    }

    // Load liked comments from localStorage
    const storedLikes = localStorage.getItem('portfolio-liked-comments');
    if (storedLikes) {
      setLikedComments(new Set(JSON.parse(storedLikes)));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.message.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      name: newComment.name,
      message: newComment.message,
      timestamp: new Date().toISOString(),
      likes: 0,
      avatar: getRandomAvatar(),
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('portfolio-comments', JSON.stringify(updatedComments));
    setNewComment({ name: '', message: '' });
  };

  const handleLike = (commentId: string) => {
    const newLikedComments = new Set(likedComments);

    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        if (likedComments.has(commentId)) {
          // Unlike
          newLikedComments.delete(commentId);
          return { ...comment, likes: Math.max(0, comment.likes - 1) };
        } else {
          // Like
          newLikedComments.add(commentId);
          return { ...comment, likes: comment.likes + 1 };
        }
      }
      return comment;
    }));

    setLikedComments(newLikedComments);
    localStorage.setItem('portfolio-liked-comments', JSON.stringify(Array.from(newLikedComments)));
  };

  const getRandomAvatar = () => {
    const avatars = ['👤', '👨', '👩', '🧑', '👨‍💼', '👩‍💼', '👨‍💻', '👩‍💻', '👨‍🎨', '👩‍🎨'];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <section id="contact" className="py-20 px-4 border-b border-slate-800/80 no-print">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Reach out for collaboration, opportunities, or leave a public comment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact Details</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Open to software engineering and AI internship discussions.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:ridhorizqullah3@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors p-2.5 rounded-lg hover:bg-slate-800/50"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>ridhorizqullah3@gmail.com</span>
                </a>

                <a
                  href="tel:+6281249934103"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors p-2.5 rounded-lg hover:bg-slate-800/50"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>+62 812-4993-4103</span>
                </a>

                <div className="flex items-center gap-3 text-slate-300 p-2.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Yogyakarta, Indonesia</span>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Online Profiles
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Ridhorizqullah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-md text-xs font-medium border border-slate-700 transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ridho-rizqullah-9677b53ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-md text-xs font-medium border border-slate-700 transition-colors flex items-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Comments Section */}
          <div className="space-y-6">
            {/* Post New Comment */}
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-base font-semibold text-white mb-4">Leave a Comment</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    required
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-slate-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <textarea
                    value={newComment.message}
                    onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
                    required
                    rows={3}
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-slate-600 transition-colors resize-none"
                    placeholder="Share your message or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post Comment</span>
                </button>
              </form>
            </div>

            {/* Comments Feed */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl max-h-[600px] overflow-y-auto">
              <h3 className="text-xl mb-6 text-white flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-400" />
                Comments ({comments.length})
              </h3>

              {comments.length === 0 ? (
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-slate-700/30 p-4 rounded-xl border border-slate-600/50 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                          {comment.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white">{comment.name}</span>
                            <span className="text-gray-500 text-xs">•</span>
                            <span className="text-gray-500 text-xs">{formatTimestamp(comment.timestamp)}</span>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">{comment.message}</p>
                          <button
                            onClick={() => handleLike(comment.id)}
                            className={`flex items-center gap-1 text-xs transition-colors ${likedComments.has(comment.id)
                              ? 'text-cyan-400'
                              : 'text-gray-500 hover:text-cyan-400'
                              }`}
                          >
                            <ThumbsUp className={`w-4 h-4 ${likedComments.has(comment.id) ? 'fill-current' : ''}`} />
                            <span>{comment.likes}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
