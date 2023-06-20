"""empty message

Revision ID: 4c2d72166b01
Revises: 3e191948b19a
Create Date: 2023-06-20 03:37:37.527764

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4c2d72166b01'
down_revision = '3e191948b19a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('muestra', schema=None) as batch_op:
        batch_op.add_column(sa.Column('aditional_comments', sa.String(length=90), nullable=False))
        batch_op.drop_column('aditional_coments')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('muestra', schema=None) as batch_op:
        batch_op.add_column(sa.Column('aditional_coments', sa.VARCHAR(length=90), autoincrement=False, nullable=False))
        batch_op.drop_column('aditional_comments')

    # ### end Alembic commands ###