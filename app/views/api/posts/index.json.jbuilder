json.array! @posts, partial: 'posts/post', as: :post
#json.posts @posts do |post|
  #json.id post.id
  #json.html_content post.html_content
  #json.markdown_content post.markdown_content
  #json.user post.user
#end
