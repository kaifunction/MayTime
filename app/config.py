# import os


# class Config:
#     SECRET_KEY = os.environ.get('SECRET_KEY')
#     FLASK_RUN_PORT = os.environ.get('FLASK_RUN_PORT')
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
#     # SQLAlchemy 1.4 no longer supports url strings that start with 'postgres'
#     # (only 'postgresql') but heroku's postgres add-on automatically sets the
#     # url in the hidden config vars to start with postgres.
#     # so the connection uri must be updated here (for production)
#     SQLALCHEMY_DATABASE_URI = os.environ.get(
#         'DATABASE_URL').replace('postgres://', 'postgresql://')
#     SQLALCHEMY_ECHO = True

import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev')  # 默认值用于开发环境
    FLASK_RUN_PORT = os.environ.get('FLASK_RUN_PORT', 5000)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True

    db_url = os.environ.get('DATABASE_URL')

    if db_url:
        # 替换 heroku 默认的 postgres:// 为 postgresql://
        SQLALCHEMY_DATABASE_URI = db_url.replace('postgres://', 'postgresql://')
    else:
        # 如果没设置 DATABASE_URL，就默认使用本地 SQLite 数据库（开发环境）
        SQLALCHEMY_DATABASE_URI = 'sqlite:///dev.db'
