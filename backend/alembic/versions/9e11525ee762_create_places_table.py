"""create places table

Revision ID: 9e11525ee762
Revises: 
Create Date: 2026-11-26 16:47:11.165063

"""
from collections.abc import Sequence

import sqlalchemy as sa

from alembic import op

# revision identifiers, used by Alembic.
revision: str = '9e11525ee762'
down_revision: str | Sequence[str] | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        "places",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("insee_code", sa.String(length=5), nullable=False),
        sa.Column("name", sa.String(), nullable=False),
        sa.Column("department", sa.String(), nullable=False),
        sa.Column(
            "place_type",
            sa.Enum("commune", "arrondissement", name="place_type", native_enum=False),
            nullable=False,
        ),
        sa.Column("mairie_lat", sa.Float(), nullable=False),
        sa.Column("mairie_lon", sa.Float(), nullable=False),
        sa.Column("is_fixture", sa.Boolean(), nullable=False, server_default=sa.false()),
    )
    op.create_index(op.f("ix_places_insee_code"), "places", ["insee_code"], unique=True)


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_index(op.f("ix_places_insee_code"), table_name="places")
    op.drop_table("places")
